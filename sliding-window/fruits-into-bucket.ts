const fruitsIntoBuckets = (nums: number[], k: number): number => {
  const map = new Map();
  let l = 0,
    r = 0,
    maxLen = 0;

  while (r < nums.length) {
    if (map.has(nums[r])) map.set(nums[r], map.get(nums[r]) + 1);
    else map.set(nums[r], 1);

    if (map.size > k) {
      map.set(nums[l], map.get(nums[l]) - 1);
      if (map.get(nums[l]) === 0) map.delete(nums[l]);
      l++;
    }

    if (map.size <= k) {
      let len = r - l + 1;
      maxLen = Math.max(maxLen, len);
    }

    r++;
  }

  return maxLen;
};

console.log(fruitsIntoBuckets([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4], 3));
