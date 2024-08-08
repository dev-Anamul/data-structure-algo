function longestOnes(nums: number[], k: number): number {
  let l = 0,
    r = 0,
    zeroCount = 0,
    max = 0;

  while (r < nums.length) {
    if (nums[r] === 0) zeroCount++;

    while (zeroCount > k) {
      if (nums[l] === 0) zeroCount--;
      l++;
    }

    if (zeroCount === k) max = Math.max(max, r - l + 1);

    r++;
  }

  return max;
}

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
