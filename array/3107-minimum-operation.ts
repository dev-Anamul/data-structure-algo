function minOperationsToMakeMedianK(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let medianInd =
    nums.length % 2 === 0 ? nums.length / 2 : (nums.length - 1) / 2;
  let operation = Math.abs(nums[medianInd] - k);

  while (nums[medianInd - 1] > k && medianInd > 0) {
    operation += Math.abs(nums[medianInd - 1] - k);
    medianInd--;
  }

  while (nums[medianInd + 1] < k && medianInd < nums.length) {
    operation += Math.abs(nums[medianInd + 1] - k);
    medianInd++;
  }

  return operation;
}

console.log(minOperationsToMakeMedianK([2, 5, 6, 8, 5], 7));
