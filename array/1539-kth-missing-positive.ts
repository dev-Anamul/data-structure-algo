function findKthPositive(arr: number[], k: number): number {
  let count = arr[0] - 1;
  let miss = 0 + count;

  for (let i = 1; i < arr.length; i++) {
    if (count >= k) {
      return miss - (count - k);
    }

    let dif = arr[i] - arr[i - 1];
    if (dif > 1) {
      count += dif - 1;
      miss = arr[i - 1] + dif - 1;
    }
  }

  if (count < k) {
    return arr[arr.length - 1] + (k - count);
  } else if (count > k) {
    return miss - (count - k);
  } else return miss;
}

console.log(findKthPositive([1, 2, 3, 4], 2));
