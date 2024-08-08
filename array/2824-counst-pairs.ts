function countPairs(nums: number[], target: number): number {
  let pairs = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= target) continue;
    else {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] < target) pairs += 1;
      }
    }
  }

  return pairs;
}
