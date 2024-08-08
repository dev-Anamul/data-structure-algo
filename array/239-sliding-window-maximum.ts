function maxSlidingWindow(nums: number[], k: number): number[] {
  let result: number[] = [];
  let max = 0;
  let l = 0,
    r = k;

  for (let i = 0; i < k; i++) {
    max = Math.max(max, nums[i]);
  }

  while (r <= nums.length) {
    result.push(max);
    max = Math.max(max, nums[r]);
    r++;
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
