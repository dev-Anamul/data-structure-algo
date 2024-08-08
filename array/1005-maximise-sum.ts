function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let i = 0;
  while (nums[i] < 0 && k > 0) {
    nums[i] *= -1;
    k--;
    i++;
  }

  if (k % 2 !== 0) {
    nums.sort((a, b) => a - b);
    nums[0] *= -1;
  }

  return nums.reduce((acc, cur) => acc + cur, 0);
}

console.log(largestSumAfterKNegations([4, -5, 4, -5, 9, 4, 5], 1));
