function maximumGap(nums: number[]): number {
  if (nums.length < 2) return 0;

  let max = Number.MIN_SAFE_INTEGER;
  nums.sort((a, b) => a - b);

  let i = 1;
  while (i < nums.length) {
    let gap = nums[i] - nums[i - 1];
    max = Math.max(gap, max);

    i++;
  }

  return max;
}
