function arrangeCoins(n: number): number {
  if (n === 1) return 1;

  let j = n;
  for (let i = 1; i <= n; i++) {
    if (j < i) return i - 1;
    j -= i;
  }

  return j;
}

console.log(arrangeCoins(1));
