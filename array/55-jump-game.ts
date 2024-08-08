function canJump(nums: number[]): boolean {
  let maxInd = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxInd) return false;
    maxInd = Math.max(maxInd, i + nums[i]);

    if (maxInd >= nums.length - 1) return true;
  }

  return true;
}
