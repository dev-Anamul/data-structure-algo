const equalSumSub = (
  ind: number,
  ds: number[],
  arr: number[],
  n: number,
  sum: number,
  res: number[][]
) => {
  if (ind >= n) {
    if (sum === 2) {
      res.push([...ds]);
    }
    return;
  }

  // take
  ds.push(arr[ind]);
  sum += arr[ind];
  equalSumSub(ind + 1, ds, arr, n, sum, res);

  // not take
  ds.pop();
  sum -= arr[ind];
  equalSumSub(ind + 1, ds, arr, n, sum, res);
};

let result: number[][] = [];
equalSumSub(0, [], [1, 2, 1], 3, 0, result);
console.log(result);
