function maxStrength(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  //   nums.sort((a, b) => a - b);

  let total = 1;
  let countNeg = 0;
  let countPos = 0;
  let maxNeg = Number.MIN_SAFE_INTEGER;

  for (let num of nums) {
    if (num === 0) continue;
    total *= num;
    if (num < 0) {
      maxNeg = Math.max(maxNeg, num);
      countNeg++;
    }
    if (num > 0) countPos++;
  }

  //   if (nums.length == 2 && total < 0) return nums[1];

  if (!countPos && countNeg == 1 && countNeg + countPos < nums.length) return 0;

  if (countNeg % 2 === 1) total /= maxNeg;

  return total;
}
