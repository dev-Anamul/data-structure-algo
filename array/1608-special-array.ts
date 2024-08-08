function specialArray(nums: number[]): number {
  nums.sort((a, b) => b - a);

  let result = -1;

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] >= i) result = i;
  }

  return result;
}

console.log(specialArray([3, 6, 7, 7, 0]));

// [0, 0, 3, 4, 4]
// 7, 7, 6, 3, 0
