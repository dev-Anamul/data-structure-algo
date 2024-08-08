function minimumOperations(nums: number[]): number {
  const set = new Set();

  for (let num of nums) {
    if (num !== 0) set.add(num);
  }

  return set.size;
}
