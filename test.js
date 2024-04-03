const { selectionSort } = require('./sortFunctions/selectionSort')
const { quickSort } = require('./sortFunctions/quickSort')
const { bubbleSort } = require('./sortFunctions/bubbleSort')
const { insertionSort } = require('./sortFunctions/insertionSort')
const { gnomeSort } = require('./sortFunctions/gnomeSort')
const { mergeSort } = require('./sortFunctions/mergeSort')
const { radixSort } = require('./sortFunctions/radixSort')
const { shellSort } = require('./sortFunctions/shellSort')

const quadricSortFunctions = {
  selectionSort,
  bubbleSort,
  insertionSort,
  gnomeSort
}

const linearSortFunctions = {
  quickSort,
  mergeSort,
  radixSort,
  shellSort
}

// const sortFunctions = quadricSortFunctions;
// const sortFunctions = linearSortFunctions;

const {
  generateRandomArray,
  generateAlmostSortedArray,
  generateSortedArray,
  generatePartiallySortedArray,
  generateReverseSortedArray,
} = require('./arrays');

for (const functionName in sortFunctions) {

  const sortFunction = sortFunctions[functionName];

  describe(`Тестирование функции ${functionName}`, () => {
    describe('Первая группа тестов: Случайные массивы', () => {
      it('Случайный массив длины 10', (done) => {
        const array = generateRandomArray(10);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10);
        done();
      });

      it('Случайный массив длины 1000', (done) => {
        const array = generateRandomArray(1000);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(100);
        done();
      });

      it('Случайный массив длины 10^4', (done) => {
        const array = generateRandomArray(10**4);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(100000);
        done();
      });

      it('Случайный массив длины 10^5', (done) => {
        const array = generateRandomArray(10**5);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(100000);
        done();
      });

    });

    describe('Вторая группа тестов: массивы, включающие несколько отсортированных последовательностей', () => {
      it('Массив, включающий несколько отсортированных последовательностей длины 10', (done) => {
        const array = generatePartiallySortedArray(10);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Массив, включающий несколько отсортированных последовательностей длины 1000', (done) => {
        const array = generatePartiallySortedArray(1000);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Массив, включающий несколько отсортированных последовательностей длины 10^4', (done) => {
        const array = generatePartiallySortedArray(10**4);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Массив, включающий несколько отсортированных последовательностей длины 10^5', (done) => {
        const array = generatePartiallySortedArray(10**5);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

    });

    describe('Третья группа тестов: почти отсортированные массивы', () => {
      it('Почти отсортированный массив длины 10', (done) => {
        const array = generateAlmostSortedArray(10);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Почти отсортированный массив длины 1000', (done) => {
        const array = generateAlmostSortedArray(1000);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Почти отсортированный массив длины 10^4', (done) => {
        const array = generateAlmostSortedArray(10**4);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Почти отсортированный массив длины 10^5', (done) => {
        const array = generateAlmostSortedArray(10**5);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });
    })

    describe('Четвёртая группа тестов: полностью отсортированные (в прямом и обратном порядке) массивы', () => {
      it('Отсортированный массив длины 10 в прямом порядке', (done) => {
        const array = generateSortedArray(10);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Отсортированный массив длины 1000 в прямом порядке', (done) => {
        const array = generateSortedArray(1000);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Отсортированный массив длины 10^4 в прямом порядке', (done) => {
        const array = generateSortedArray(10**4);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Отсортированный массив длины 10^5 в прямом порядке', (done) => {
        const array = generateSortedArray(10**5);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Отсортированный массив длины 10 в обратном порядке', (done) => {
        const array = generateReverseSortedArray(10);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Отсортированный массив длины 1000 в обратном порядке', (done) => {
        const array = generateReverseSortedArray(1000);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Отсортированный массив длины 10^4 в обратном порядке', (done) => {
        const array = generateReverseSortedArray(10**4);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(10000);
        done();
      });

      it('Отсортированный массив длины 10^5 в обратном порядке', (done) => {
        const array = generateReverseSortedArray(10**5);
        const startTime = performance.now();
        sortFunction(array);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        expect(executionTime).toBeLessThan(120000);
        done();
      });
    })
  });
}

