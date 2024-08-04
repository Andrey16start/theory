// Algorithm: "Selection sort"
// Condition: No
// Type: Quadratic
// Complexity: O(n2)


const unsortedArr = [1, 4, 3, 6, 7, 0, 2, -3, 8, 4, 4, 3, 9];

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

selectionSort(unsortedArr); // [-3, 0, 1, 2, 3, 3, 4, 4, 4, 6, 7, 8, 9]
// 91 iterations
// 13 external (i) and 78 internal (j)