function productExceptSelf(nums: number[]): number[] {
  let prefix: number[] = Array(nums.length);
  let result: number[] = Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    prefix[i] = nums[i - 1] ?? 1 * nums[i];
  }

  console.log(prefix);

  return [1, 2];
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
