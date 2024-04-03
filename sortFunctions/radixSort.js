function radixSort(nums) {
  // Функция для определения максимального числа в массиве
  function getMax(arr) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i];
      }
    }
    return max;
  }

  // Функция для подсчета количества цифр в числе
  function countDigits(num) {
    let count = 0;
    let temp = num;
    while (temp !== 0) {
      temp = Math.floor(temp / 10);
      count++;
    }
    return count;
  }

  // Функция для получения цифры числа по разряду
  function getDigit(num, place) {
    let temp = Math.abs(num);
    temp = Math.floor(temp / Math.pow(10, place));
    return temp % 10;
  }

  const max = getMax(nums); // Получаем максимальное число в массиве
  const maxDigits = countDigits(max); // Получаем количество цифр в максимальном числе

  // Основной цикл сортировки по разрядам
  for (let k = 0; k < maxDigits; k++) {
    const buckets = [];
    // Инициализируем группы
    for (let i = 0; i < 10; i++) {
      buckets.push([]);
    }
    // Распределяем числа по группам по текущему разряду
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }

    // Обновляем исходный массив на основе групп
    nums = [];
    for (let i = 0; i < buckets.length; i++) {
      for (let j = 0; j < buckets[i].length; j++) {
        nums.push(buckets[i][j]);
      }
    }
  }

  return nums; // Возвращаем отсортированный массив
}

module.exports = { radixSort }; // Экспортируем функцию для использования в других модулях

