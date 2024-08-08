function minDifference(nums: number[]): number {
  if (nums.length < 4) return 0;

  nums.sort((a, b) => a - b);

  let difOne = nums[nums.length - 4] - nums[0];
  let difTwo = nums[nums.length - 3] - nums[1];
  let difThree = nums[nums.length - 2] - nums[2];
  let difFour = nums[nums.length - 1] - nums[3];

  return Math.min(difOne, difTwo, difThree, difFour);
}

console.log(minDifference([0, 1, 1, 2, 4, 6, 6, 6]));

// [ 0, 1, 1, 2, 4, 6, 6, 6 ]
