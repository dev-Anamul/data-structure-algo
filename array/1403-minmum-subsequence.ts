function minSubsequence(nums: number[]): number[] {
  let sumOfArr = nums.reduce((acc, cur) => acc + cur, 0);

  let l = 0,
    r = 0,
    sum = 0;
  let result: number[] = [];

  while (r < nums.length) {
    result.push(nums[r]);
    sum += nums[r];

    while (sum > sumOfArr - sum) {
      result.shift();
      sum -= nums[l];
      l++;
    }

    r++;
  }

  return result;
}

console.log(minSubsequence([4, 3, 10, 9, 8]));
