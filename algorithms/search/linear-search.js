// Algorithm: "Linear search"
// Condition: No
// Type: Linear
// Complexity: O(n)

// Examples
// Number of iterations depending on the array.length
// array.length === iterations count (in worst case)
//
// 8 - 8 iterations
// 1,000 - 1,000 iterations
// 100,000 - 100,000 iterations
// 1,000,000 - 1,000,000 iterations

const arr = [100, 0, 5, 7, 8, 23, 4, 6, 89, 1, 2, 3, 54, 7, 5, 3, 92];


/**
 * Finds the index of the target element in a sorted array using binary search.
 * @param {number[]} arr - The array of numbers to search through.
 * @param {number} target - The target number to find.
 * @returns {number} The index of the target element in the array, or -1 if not found.
 */
const findIndexLinear = (arr, target) => {
  let i = arr.length;

  while (i--) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

findIndexLinear(arr, 100); // O(17)
findIndexLinear(arr, 92); // O(1)