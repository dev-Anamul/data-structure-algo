function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  let i = 0,
    j = 0;
  let result = new Set<number>();

  while (j < nums.length) {
    if (nums[j] === key) {
      i = j - k < 0 ? 0 : j - k;
      while (i <= j + k && i < nums.length) {
        result.add(i);
        i++;
      }
    }

    j++;
  }

  return Array.from(result);
}

console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2));
