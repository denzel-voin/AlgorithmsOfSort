// Функция для генерации случайного числа в диапазоне от min до max (включительно)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации массива случайных чисел заданной длины
function generateRandomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(getRandomInt(1, 1000));
  }
  return array;
}

// Функция для создания почти отсортированного массива с заданным числом перестановок
function generateAlmostSortedArray(length, numSwaps) {
  const sortedArray = generateSortedArray(length);
  for (let i = 0; i < numSwaps; i++) {
    const index1 = getRandomInt(0, length - 1);
    const index2 = getRandomInt(0, length - 1);
    // Переставляем два элемента
    const temp = sortedArray[index1];
    sortedArray[index1] = sortedArray[index2];
    sortedArray[index2] = temp;
  }
  return sortedArray;
}

// Функция для генерации полностью отсортированного массива
function generateSortedArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(i + 1);
  }
  return array;
}

// Функция для генерации полностью отсортированного массива в обратном порядке
function generateReverseSortedArray(length) {
  const array = [];
  for (let i = length; i > 0; i--) {
    array.push(i);
  }
  return array;
}

// Функция создания массива, включающего несколько отсортированных последовательностей
const generatePartiallySortedArray = (length) => {
  const array = [];
  const seqLength = Math.floor(length / 3);
  for (let i = 0; i < 3; i++) {
    const start = i * seqLength;
    const end = start + seqLength;
    for (let j = start; j < end; j++) {
      array.push(j);
    }
  }
  // Добавляем случайные числа, чтобы перемешать массив
  for (let i = 0; i < length - 3 * seqLength; i++) {
    array.push(Math.floor(Math.random() * 1000)); // Генерируем случайное число от 0 до 999
  }
  return array;
};

module.exports = {
  generateAlmostSortedArray,
  generateRandomArray,
  generateReverseSortedArray,
  generateSortedArray,
  generatePartiallySortedArray
};
