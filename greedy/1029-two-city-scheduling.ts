function twoCitySchedCost(costs: number[][]): number {
  let totalCost = 0;

  for (let c of costs) {
    totalCost += Math.min(...c);
  }

  return totalCost;
}

console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
);
