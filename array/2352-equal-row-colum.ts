function equalPairs(grid: number[][]): number {
  let colum: number[][] = [];

  for (let i = 0; i < grid[0].length; i++) {
    let temp: number[] = [];
    for (let j = 0; j < grid.length; j++) {
      temp.push(grid[j][i]);
    }
    colum.push(temp);
  }

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < colum.length; j++) {
      if (grid[i].toString() === colum[j].toString()) count++;
    }
  }

  return count;
}

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);
