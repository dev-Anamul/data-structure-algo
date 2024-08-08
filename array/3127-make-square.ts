function canMakeSquare(grid: string[][]): boolean {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let set = new Set();
    for (let j = 0; j < grid[i].length; j++) {
      set.add(grid[j][i]);
    }

    count += set.size - 2;
  }

  return count <= 1;
}

console.log(
  canMakeSquare([
    ["B", "W", "B"],
    ["W", "B", "W"],
    ["B", "W", "B"],
  ])
);
