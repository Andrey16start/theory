// Algorithm: "Fibonacci"
// Condition: Integer argument
// Type: Quadratic
// Complexity: O(2^n)

// Fibonacci sequence - 1,1,2,3,5,8,13,21,34,55,89,144
// F(n) = F(n-1) + F(n-2)

const fibonacci = n => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(11); // 89
fibonacci(20); // 6,765