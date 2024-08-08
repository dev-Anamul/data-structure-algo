function minimumAverage(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let minAvg = Number.MAX_SAFE_INTEGER;

  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    minAvg = Math.min(minAvg, (nums[l] + nums[r]) / 2);

    l++;
    r--;
  }

  return minAvg;
}
