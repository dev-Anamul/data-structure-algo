function findWinners(matches: number[][]): number[][] {
  const zeroLoss = new Map<number, number>();
  const oneLoss = new Map<number, number>();

  for (let [winner, loser] of matches) {
    if (oneLoss.has(loser))
      oneLoss.set(loser, (oneLoss.get(loser) as number) + 1);
    else {
      oneLoss.set(loser, 1);
    }

    zeroLoss.set(winner, 1);
  }

  const oneLos = Array.from(oneLoss).reduce((acc: number[], cur) => {
    if (cur[1] === 1) acc.push(cur[0]);
    return acc;
  }, []);

  for (let key of Array.from(oneLoss.keys())) {
    if (zeroLoss.has(key)) zeroLoss.delete(key);
  }

  return [
    Array.from(zeroLoss.keys()).sort((a, b) => a - b),
    oneLos.sort((a, b) => a - b),
  ];
}

console.log(
  findWinners([
    [1, 5],
    [2, 5],
    [2, 8],
    [2, 9],
    [3, 8],
    [4, 7],
    [4, 9],
    [5, 7],
    [6, 8],
  ])
);
