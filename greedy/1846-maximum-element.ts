function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  arr.sort((a, b) => a - b);

  if (arr[0] !== 1) arr[0] = 1;
  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i - 1] - arr[i]) <= 1) {
      max = Math.max(max, arr[i]);
    } else {
      arr[i] = arr[i - 1] + 1;
      max = Math.max(max, arr[i - 1] + 1);
    }
  }

  return max;
}

console.log(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5]));
