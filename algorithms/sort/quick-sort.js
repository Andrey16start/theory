// Algorithm: "Quick sort"
// Condition: No
// Type: Logarithmic
// Complexity: O(log n)


const unsortedArr = [1, 4, 3, 6, 7, 0, 2, -3, 8, 4, 4, 3, 9, 2, 6, 4, 8, 1, 2, -6, 3, 6, 1, -9, 2, 6, 8, 12, -12];

/**
 * Sorts array by ASC
 * @param {number[]} arr - The array of numbers to search through.
 * @returns {number[]} The sorted array by ASC
 */
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    const destination = arr[i] > pivot ? greater : less;

    destination.push(arr[i]);
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

quickSort(unsortedArr); // 147 iterations