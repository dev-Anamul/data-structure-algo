function findSubarrays(nums: number[]): boolean {
  const set = new Set();

  for (let i = 1; i < nums.length; i++) {
    let sum = nums[i - 1] + nums[i];
    if (set.has(sum)) return true;
    else set.add(sum);
  }

  return false;
}
