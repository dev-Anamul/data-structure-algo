function canBeIncreasing(nums: number[]): boolean {
  if (nums.length === 2) return true;
  let count = 0;
  for (let i = 1; i < 2; i++) {
    if (nums[i + 1] < nums[i] && nums[i + 1] <= nums[i - 1]) count++;
  }

  return count < 2;
}

console.log(canBeIncreasing([2, 3, 1, 2]));
// console.log(canBeIncreasing([2, 3, 1, 2]));
// console.log(canBeIncreasing([1, 1, 1]));

// canBeIncreasing([2, 3, 1, 2]);
