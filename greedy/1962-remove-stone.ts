function minStoneSum(piles: number[], k: number): number {
  piles.sort((a, b) => b - a);

  for (let i = 0; i < Math.ceil(k / piles.length); i++) {
    for (let j = 0; j < piles.length && k > 0; j++) {
      piles[j] = piles[j] - Math.floor(piles[j] / 2);
      k--;

      console.log(piles);

      while (piles[j] > piles[j + 1] * 2 && j + 1 !== piles.length) {
        piles[j] = piles[j] - Math.floor(piles[j] / 2);
        k--;
      }

      if (k === 0) break;
    }
  }

  console.log(piles);

  return piles.reduce((acc, cur) => acc + cur, 0);
}

console.log(minStoneSum([1391, 5916], 3));
