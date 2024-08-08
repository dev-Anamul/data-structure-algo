const maximumCardPoints = (nums: number[], k: number): number => {
  let sum = 0;
  let lSum = 0;
  let rSum = 0;

  for (let i = 0; i < k; i++) {
    lSum += nums[i];
  }

  sum = lSum;

  let rIndex = nums.length - 1;
  for (let i = k - 1; i >= 0; i--) {
    lSum -= nums[i];
    rSum += nums[rIndex];
    rIndex--;
    sum = Math.max(sum, lSum + rSum);
  }

  return sum;
};

console.log(maximumCardPoints([6, 2, 3, 4, 7, 2, 1, 7, 1], 4));
