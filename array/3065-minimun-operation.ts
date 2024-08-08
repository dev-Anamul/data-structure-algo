function minOperations(nums: number[], k: number): number {
  let count = 0;

  for (let num of nums) {
    if (num < k) count++;
  }

  return count;
}
