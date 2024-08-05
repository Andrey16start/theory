// Algorithm: "Binary search"
// Condition: Array is sorted by ASC
// Type: Logarithmic
// Complexity: O(log2n)

// Examples
// Number of iterations depending on the array.length
// Math.ceil( Math.log2(array.length) ) === iterations count
//
// 8 - 3 iterations
// 1,000 - 10 iterations
// 100,000 - 17 iterations
// 1,000,000 - 20 iterations
// 100,000,000 - 27 iterations
// 100,000,000,000 - 37 iterations

const arr100kk = (() => {
  const arr = [];

  for (let i = 0; i < 100000000; i++) {
    arr.push(i + 1);
  }
  return arr;
})();

/**
 * Finds the index of the target element in a sorted array using binary search.
 * @param {number[]} arr - The array of numbers to search through.
 * @param {number} target - The target number to find.
 * @returns {number} The index of the target element in the array, or -1 if not found.
 */
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length;
  let middle;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

binarySearch(arr100kk, 4); // 27 iterations
binarySearch(arr100kk, 99000000); // 26 iterations
binarySearch(arr100kk, 50000001); // 1 iteration

/**
 * Finds the index of the target element in a sorted array using binary search.
 * @param {number[]} arr - The array of numbers to search through.
 * @param {number} target - The target number to find.
 * @returns {number} The index of the target element in the array, or -1 if not found.
 */
const recursiveBinarySearch = (arr, target, start, end) => {
  let middle = Math.floor((start + end) / 2);

  if (target === arr[middle]) {
    return middle;
  }

  if (target < arr[middle]) {
    return recursiveBinarySearch(arr, target, start, middle - 1);
  } else {
    return recursiveBinarySearch(arr, target, middle + 1, end);
  }
}

recursiveBinarySearch(arr100kk, 4, 0, arr100kk.length); // 27 recursive calls
recursiveBinarySearch(arr100kk, 99000000, 0, arr100kk.length); // 26 recursive calls
recursiveBinarySearch(arr100kk, 50000001, 0, arr100kk.length); // 1 recursive call