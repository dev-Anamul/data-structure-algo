function longestMonotonicSubarray(nums: number[]): number {
  let lCount = 1,
    rCount = 1,
    l = 1,
    r = nums.length - 2;

  while (r >= 0 || l < nums.length) {
    if (nums[l - 1] < nums[l]) lCount++;
    if (nums[r] > nums[r + 1]) rCount++;
    r--;
    l++;
  }

  return Math.max(lCount, rCount);
}

console.log(longestMonotonicSubarray([1, 4, 3, 3, 2]));
