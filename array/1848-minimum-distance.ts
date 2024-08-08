function getMinDistance(nums: number[], target: number, start: number): number {
  let minDis = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) minDis = Math.min(minDis, Math.abs(i - start));
  }

  return minDis;
}
