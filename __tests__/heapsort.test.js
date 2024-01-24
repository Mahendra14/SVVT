const {swap, heapify, heapSort} = require('../heapSort');
describe('HeapSort Function', () => {
  test('Sorts an array in ascending order', () => {
    const inputArray = [4, 2, 8, 1, 6];
    const sortedArray = heapSort(inputArray);
    console.log(sortedArray);
    expect(sortedArray).toEqual([1, 2, 4, 6, 8]);
  });

  test('Handles an empty array', () => {
    const inputArray = [];
    const sortedArray = heapSort(inputArray);
    
    expect(sortedArray).toEqual([]);
  });

  test('Handles an array with a single element', () => {
    const inputArray = [5];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([5]);
  });

  test('Handles an already sorted array in ascending order', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  test('Handles an already sorted array in descending order', () => {
    const inputArray = [5, 4, 3, 2, 1];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  test('Handles an array with duplicate elements', () => {
    const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  test('Handles the maximum number capability', () => {
    const inputArray = [Number.MAX_SAFE_INTEGER, 5, 3, 9, 2, 7];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([2, 3, 5, 7, 9, Number.MAX_SAFE_INTEGER]);
  });

  test('Handles negative numbers', () => {
    const inputArray = [4, -2, 8, -1, 6];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([-2, -1, 4, 6, 8]);
  });

  test('Handles irrational numbers', () => {
    const inputArray = [Math.PI, 2, Math.sqrt(2), 3, Math.E];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([Math.sqrt(2), 2, Math.E, 3, Math.PI]);
  });
});

describe('Swap Function', () => {
  test('Swaps elements in an array correctly', () => {
    const array = [1, 2, 3, 4];
    swap(array, 1, 3);
    expect(array).toEqual([1, 4, 3, 2]);
  });

  test('Handles swapping elements with the same index', () => {
    const array = [1, 2, 3, 4];
    swap(array, 1, 1);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test('Swaps elements in an array with negative numbers', () => {
    const array = [1, -2, 3, -4];
    swap(array, 0, 3);
    expect(array).toEqual([-4, -2, 3, 1]);
  });

  // Add more test cases for swap based on your requirements
});