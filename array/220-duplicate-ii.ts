function containsNearbyAlmostDuplicate(
  nums: number[],
  indexDiff: number,
  valueDiff: number
): boolean {
  let l = 0,
    r = 1;

  while (r < nums.length) {
    if (r - l > indexDiff) {
      while (l < r) {
        if (r - l <= indexDiff && Math.abs(nums[l] - nums[r]) <= valueDiff)
          return true;
        l++;
      }
    }

    if (r - l <= indexDiff && Math.abs(nums[l] - nums[r]) <= valueDiff)
      return true;

    r++;
  }

  return false;
}

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));
