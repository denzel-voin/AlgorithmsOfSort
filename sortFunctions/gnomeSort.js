const gnomeSort = (arr) => {
  let index = 0; // Инициализируем переменную для индекса

  // Итерируемся по массиву, пока не достигнем конца
  while (index < arr.length) {
    // Если индекс равен 0 или текущий элемент больше или равен предыдущему
    if (index === 0 || arr[index] >= arr[index - 1]) {
      index++; // Увеличиваем индекс
    } else {
      // Если текущий элемент меньше предыдущего, меняем их местами и уменьшаем индекс
      let temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index--;
    }
  }

  return arr; // Возвращаем отсортированный массив
};

module.exports = { gnomeSort }; // Экспортируем функцию для использования в других модулях
