// Algorithm: "Factorial"
// Condition: Integer argument
// Type: Logarithmic
// Complexity: O(n)

// 3! = 3 * 2 * 1 = 6
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040

const factorial = n => {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

factorial(5); // 120
factorial(10); // 3,628,800
