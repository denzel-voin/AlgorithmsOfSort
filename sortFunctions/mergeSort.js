const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr; // Если массив содержит один элемент или меньше, он уже отсортирован
  }

  const middle = Math.floor(arr.length / 2); // Находим середину массива

  // Создаем левую часть массива
  const left = new Array(middle);
  for (let i = 0; i < middle; i++) {
    left[i] = arr[i];
  }

  // Создаем правую часть массива
  const right = new Array(arr.length - middle);
  for (let i = middle; i < arr.length; i++) {
    right[i - middle] = arr[i];
  }

  // Рекурсивно сортируем левую и правую части массива и затем сливаем их
  return merge(mergeSort(left), mergeSort(right));
}

// Функция слияния двух отсортированных массивов
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Слияние отсортированных массивов
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Добавляем оставшиеся элементы из левого массива
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Добавляем оставшиеся элементы из правого массива
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result; // Возвращаем отсортированный результат
}

module.exports = { mergeSort }; // Экспортируем функцию для использования в других модулях
