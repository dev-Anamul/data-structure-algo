function tribonacci(n: number): number {
  if (n <= 0) return n;
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

console.log(tribonacci(4));
