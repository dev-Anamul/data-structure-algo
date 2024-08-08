function rotate(matrix: number[][]): void {
  let newMat: number[][] = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let temp: number[] = [];
    for (let j = 0; j < matrix.length; j++) {
      temp.unshift(matrix[j][i]);
    }
    newMat.push(temp);
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = [...newMat[i]];
  }

  console.log(matrix);
}

console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
