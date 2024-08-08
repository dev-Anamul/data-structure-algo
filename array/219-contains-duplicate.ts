function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (Math.abs(map.get(nums[i]) - i) <= k) return true;
      else map.set(nums[i], i);
    } else map.set(nums[i], i);
  }

  return false;
}

console.log(containsNearbyDuplicate([0, 1, 2, 3, 2, 5], 3));
