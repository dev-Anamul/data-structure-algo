function isCovered(ranges: number[][], left: number, right: number): boolean {
  for (let range of ranges) {
    if (
      (range[0] >= left && range[0] <= right) ||
      (range[1] >= left && range[1] <= right)
    )
      return true;
  }

  return false;
}

console.log(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    5
  )
);
