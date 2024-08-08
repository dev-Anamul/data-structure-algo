function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let max = Number.MIN_SAFE_INTEGER;

  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    max = Math.max(max, nums[l] + nums[r]);
    l++;
    r--;
  }

  return max;
}
