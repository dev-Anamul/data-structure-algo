function searchMatrix(matrix: number[][], target: number): boolean {
  let flatArr = matrix.flat();

  let l = 0,
    r = flatArr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r + 1) / 2);

    if (flatArr[mid] === target) return true;

    if (target < flatArr[mid]) r = mid - 1;
    else if (target > flatArr[mid]) l = mid + 1;
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
