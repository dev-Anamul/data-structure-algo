function maxSubarrayLength(nums: number[], k: number): number {
  let map = new Map();
  let l = 0,
    r = 0,
    maxLen = 0;

  while (r < nums.length) {
    if (map.has(nums[r])) map.set(nums[r], map.get(nums[r]) + 1);
    else map.set(nums[r], 1);

    while (map.get(nums[r]) > k) {
      map.set(nums[l], map.get(nums[l]) - 1);
      l++;
    }

    let len = r - l + 1;
    maxLen = Math.max(maxLen, len);
    r++;
  }

  return maxLen;
}

console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1));
