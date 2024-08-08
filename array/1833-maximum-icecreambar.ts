function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);
  let count = 0;
  for (let c of costs) {
    if (c <= coins) {
      coins -= c;
      count++;
    } else break;
  }

  return count;
}
