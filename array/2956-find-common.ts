function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  let result = [0, 0];

  for (let n1 of nums1) {
    if (nums2.includes(n1)) result[0] += 1;
  }

  for (let n2 of nums2) {
    if (nums1.includes(n2)) result[1] += 1;
  }

  return result;
}
