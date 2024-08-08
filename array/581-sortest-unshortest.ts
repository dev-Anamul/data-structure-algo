function findUnsortedSubarray(nums: number[]): number {
  if (nums.length === 1) return 0;

  let sortNums = nums.slice().sort((a, b) => a - b);

  let minInd = Number.MAX_SAFE_INTEGER;
  let maxInd = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (sortNums[i] !== nums[i]) {
      minInd = Math.min(minInd, i);
      maxInd = Math.max(maxInd, i);
    }
  }

  if (maxInd < 0 && minInd > nums.length) return 0;

  console.log(maxInd - minInd + 1, minInd, maxInd);

  return maxInd - minInd + 1;
}

console.log(findUnsortedSubarray([1, 2, 3, 4]));

// 2, 6, 4, 8, 10, 9, 15
// 2, 4, 6, 8, 9, 10, 15
