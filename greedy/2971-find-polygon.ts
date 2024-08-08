function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let result = -1;
  let total = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < total) result = total + nums[i];

    total += nums[i];
  }

  return result;
}

console.log(largestPerimeter([5, 5, 50]));
