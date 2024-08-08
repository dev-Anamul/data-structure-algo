function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (m * n !== original.length) return [];
  const newArr: number[][] = [];

  while (original.length) {
    newArr.push(original.slice(0, n));
    original = original.slice(n);
  }

  return newArr;
}

console.log(construct2DArray([1, 2], 1, 1));
