function minCostToMoveChips(position: number[]): number {
  let oddCount = 0;
  let evenCount = 0;

  for (let num of position) {
    if (num % 2 === 0) evenCount;
    else oddCount++;
  }

  return 1 * Math.min(oddCount, evenCount);
}
