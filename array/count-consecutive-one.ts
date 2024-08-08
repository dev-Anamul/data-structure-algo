const countOne = (nums: number[], k: number): number => {
  let l = 0;
  let r = 0;
  let totalZeros = 0;
  let maxLen = 0;

  while (r < nums.length) {
    if (nums[r] === 0) totalZeros++;

    if (totalZeros > k) {
      if (nums[l] === 0) totalZeros--;
      l++;
    }

    if (totalZeros <= k) {
      let len = r - l + 1;
      maxLen = Math.max(maxLen, len);
    }

    r++;
  }

  return maxLen;
};

console.log(countOne([0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0], 2));
