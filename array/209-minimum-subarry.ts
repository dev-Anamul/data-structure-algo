function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0,
    r = 0,
    sum = 0,
    minLen = nums.length + 1;

  while (r < nums.length) {
    sum += nums[r];

    while (sum >= target) {
      sum -= nums[l];
      let len = r - l + 1;
      minLen = Math.min(minLen, len);
      l++;
    }

    r++;
  }

  console.log(sum);

  if (minLen > nums.length) return 0;
  else return minLen;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

// Input: s = "AAAAACCCCC AAAAACCCCC CAAAAAGGGTTT"
