const selectionSort = (arr) => {
  const n = arr.length;

  // Проходим по всем элементам массива
  for (let i = 0; i < n - 1; i++) {
    // Предполагаем, что минимальный элемент находится в текущей позиции
    let minIndex = i;

    // Проверяем все элементы правее текущей позиции на наличие минимального элемента
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        // Если находим элемент меньший, чем текущий минимальный, обновляем индекс минимального элемента
        minIndex = j;
      }
    }

    // Обмениваем элементы местами: текущий элемент и минимальный
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

module.exports = { selectionSort };
