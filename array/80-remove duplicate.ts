function removeDuplicates(nums: number[]): number {
  let l = 0,
    r = 0,
    lastDifferent = 0;

  while (r < nums.length) {
    if (nums[l] !== nums[r]) {
      if (r - lastDifferent >= 2) {
        nums[l + 1] = nums[l];
        nums[l + 2] = nums[r];
        l += 2;
      } else {
        nums[l + 1] = nums[r];
        l++;
      }
      lastDifferent = r;
    }
    r++;
  }

  if (nums[lastDifferent] === nums[lastDifferent + 1]) {
    nums[l + 1] = nums[lastDifferent + 1];
    l++;
  }

  return l + 1;
}

console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 3]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));

// [ 0, 0, 1, 1, 2, 3, 2, 3, 3 ]
// [ 1, 1, 2, 2, 3, 3 ]
// [ 1, 1, 2, 1, 3, 2, 3 ]
