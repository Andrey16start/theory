// Algorithm: "Merge sorted arrays"
// Condition: Both arrays must be sorted by ASC
// Type: Linear
// Complexity: O(n)


const arr1 = [1, 5, 7, 9, 12, 25, 30, 80, 50];
const arr2 = [2, 6, 8, 15, 21, 90];


/**
 * Sorts array by ASC
 * @param {number[]} arr1 - The sorted array of numbers
 * @param {number[]} arr2 - The sorted array of numbers
 * @returns {number[]} The sorted array by ASC, result of merge two arrays
 */
const mergeArrays = (arr1, arr2) => {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  let iterations = 0;

  while (i < arr1.length && j < arr2.length) {
    iterations++;
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    iterations++;
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    iterations++;
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

mergeArrays(arr1, arr2); // [1, 2, 5, 6, 7, 8, 9, 12, 15, 21, 25, 30, 80, 50, 90]