function luckyNumbers(matrix: number[][]): number[] {
  let rowMin: number[] = [];
  let colMax: number[] = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let cMax = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < matrix.length; j++) {
      if (i === 0) {
        rowMin.push(Math.min(...matrix[j]));
      }
      cMax = Math.max(cMax, matrix[j][i]);
    }
    colMax.push(cMax);
  }

  let result: number[] = [];
  rowMin.forEach((el) => {
    let ind = colMax.indexOf(el);

    if (ind !== -1) {
      result.push(el);
      colMax[ind] = NaN;
    }
  });

  return result;
}

console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
);
