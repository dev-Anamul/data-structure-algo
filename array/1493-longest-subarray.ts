function longestSubarray(nums: number[]): number {
  let l = 0,
    r = 0,
    diffCount = 0,
    max = 0;

  while (r < nums.length) {
    if (nums[r] !== 1) diffCount++;

    while (diffCount > 1) {
      if (nums[l] !== 1) diffCount--;
      l++;
    }

    if (diffCount <= 1) max = Math.max(max, r - l + 1);

    r++;
  }

  return max - 1;
}

console.log(longestSubarray([1, 1, 0, 1]));
