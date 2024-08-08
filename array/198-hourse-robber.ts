function rob(nums: number[]): number {
  let sumOne = nums[0];
  let sumTwo = nums[1];
  let sumThree = nums[2];

  for (let i = 5; i < nums.length; i += 3) {
    sumOne += nums[i - 2];
    sumTwo += nums[i - 1];
  }
}

console.log(rob([1, 2, 3, 1]));
