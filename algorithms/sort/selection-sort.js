// Algorithm: "Selection sort"
// Condition: No
// Type: Quadratic
// Complexity: O(n2)


const unsortedArr = [1, 4, 3, 6, 7, 0, 2, -3, 8, 4, 4, 3, 9, 2, 6, 4, 8, 1, 2, -6, 3, 6, 1, -9, 2, 6, 8, 12, -12];

/**
 * Sorts array by ASC
 * @param {number[]} arr - The array of numbers to search through.
 * @returns {number[]} The sorted array by ASC
 */
const selectionSort = (arr) => {
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[minIndex]) {
        minIndex = j;
      }
    }
    const minValue = sortedArr[minIndex];

    sortedArr[minIndex] = sortedArr[i];
    sortedArr[i] = minValue;
  }

  return sortedArr;
}

selectionSort(unsortedArr); // 435 iterations
