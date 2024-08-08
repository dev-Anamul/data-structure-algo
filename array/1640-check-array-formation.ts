function canFormArray(arr: number[], pieces: number[][]): boolean {
  let l = 0;

  pieces.flat().forEach((el) => {
    if (el === arr[l]) l++;
  });

  return l === arr.length - 1;
}
