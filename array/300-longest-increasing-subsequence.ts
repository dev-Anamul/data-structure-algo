function lengthOfLIS(nums: number[]): number {
  if (nums.length < 2) return 1;

  let maxLen = 0;
  let j = 1;
  let l = 0;

  while (j < nums.length) {
    if (nums[j - 1] >= nums[j]) l = j;

    maxLen = Math.max(j - l + 1, maxLen);

    j++;
  }

  return maxLen;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
