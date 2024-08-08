function minimumArea(grid: number[][]): number {
  const horizontalIndex: number[] = [];
  const verticalIndex: number[] = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        horizontalIndex.push(j);
        verticalIndex.push(i);
      }
    }
  }

  horizontalIndex.sort((a, b) => a - b);
  verticalIndex.sort((a, b) => a - b);

  let result =
    (horizontalIndex[horizontalIndex.length - 1] - horizontalIndex[0] + 1) *
    (verticalIndex[verticalIndex.length - 1] - verticalIndex[0] + 1);

  return result;
}

console.log(
  minimumArea([
    [0, 1, 0],
    [1, 0, 1],
  ])
);
