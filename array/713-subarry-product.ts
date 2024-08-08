function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let l = 0,
    r = 0,
    count = 0,
    product = 1;

  while (r <= nums.length) {
    product *= nums[r];

    while (product >= k) {
      product /= nums[l];
      l++;
    }

    let len = r - l - 1;
    count = count + (len / 2) * len;
    r++;
  }

  return count;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
