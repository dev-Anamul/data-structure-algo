function minOperations(nums: number[]): number {
  if (nums.length === 1) return 0;

  let op = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      op += nums[i - 1] - nums[i] + 1;

      nums[i] = nums[i - 1] + 1;
    }
  }

  return op;
}

console.log(minOperations([1, 5, 2, 4, 1]));
