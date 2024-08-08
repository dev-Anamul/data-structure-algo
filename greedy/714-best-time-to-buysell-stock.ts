function maxProfit(prices: number[], fee: number): number {
  let purchasePrice = prices[0];
  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {}
  }

  return totalProfit;
}

console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));
