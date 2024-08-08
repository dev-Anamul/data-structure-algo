function maximumDifference(nums: number[]): number {
  let maxDif = -1;
  let leftMin = nums[0];
  let r = 1;

  while (r < nums.length) {
    if (nums[r - 1] < nums[r]) {
      maxDif = Math.max(maxDif, nums[r] - leftMin);
    }

    leftMin = Math.min(leftMin, nums[r]);
    r++;
  }

  return maxDif;
}

console.log(maximumDifference([1, 5, 2, 10]));
