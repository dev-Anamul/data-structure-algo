function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);

  let i = 1;
  let totalCost = 0;

  for (let c of cost) {
    if (i % 3 === 0) {
      i++;
      continue;
    }

    totalCost += c;
    i++;
  }

  return totalCost;
}

console.log(minimumCost([6, 5, 7, 9, 2, 2]));
