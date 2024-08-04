// Algorithm: "Bubble sort"
// Condition: No
// Type: Quadratic
// Complexity: O(n2)


const unsortedArr2 = [1, 4, 3, 6, 7, 0, 2, -3, 8, 4, 4, 3, 9];

/**
 * Sorts array by ASC
 * @param {number[]} arr - The array of numbers to search through.
 * @returns {number[]} The sorted array by ASC
 */
const bubbleSort = (arr) => {
  const sortedArr = [...arr];
  let iterations = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    iterations++;
    let wasChanges = false;

    for (let j = 0; j < sortedArr.length; j++) {
      iterations++;
      const currentValue = sortedArr[j];
      const nextValue = sortedArr[j + 1];

      if (currentValue > nextValue) {
        sortedArr[j + 1] = currentValue;
        sortedArr[j] = nextValue;
        wasChanges = true;
      }
    }

    if (!wasChanges) {
      break;
    }
  }

  return sortedArr;
}

bubbleSort(unsortedArr2);