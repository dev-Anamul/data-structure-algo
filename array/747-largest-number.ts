function dominantIndex(nums: number[]): number {
  let largeInd = 1,
    secondLarge = 0;

  if (nums[0] > nums[1]) {
    largeInd = 0;
    secondLarge = 1;
  }

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > nums[largeInd]) {
      secondLarge = largeInd;
      largeInd = i;
    } else if (nums[i] >= nums[secondLarge] && nums[i] <= nums[largeInd]) {
      secondLarge = i;
    }
  }

  if (nums[largeInd] >= nums[secondLarge] * 2) return largeInd;
  else return -1;
}

console.log(dominantIndex([3, 6, 1, 0]));
