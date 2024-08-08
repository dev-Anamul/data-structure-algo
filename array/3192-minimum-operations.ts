function minOperations(nums: number[]): number {
  let l = nums.indexOf(0),
    r = l + 1,
    count = 0;

  if (l === -1) return 0;

  while (r < nums.length) {
    if (nums[l] !== nums[r]) {
      console.log("cal", l, r);

      count++;
      l = r;
    }

    r++;
  }

  count++;

  return count;
}

console.log(minOperations([1, 0, 0, 0]));
