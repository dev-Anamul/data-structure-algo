function findMaxConsecutiveOnes(nums: number[]): number {
  let maxConsecutive = 0;
  let count = 0;
  for (let num of nums) {
    if (num === 1) count++;
    else count = 0;

    maxConsecutive = Math.max(maxConsecutive, count);
  }

  return maxConsecutive;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
