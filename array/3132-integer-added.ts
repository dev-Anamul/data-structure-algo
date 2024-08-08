function minimumAddedInteger(nums1: number[], nums2: number[]): number {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let l = 0,
    r = 0;
  let result: number = 0;

  while (l < nums1.length && r < nums2.length) {
    if (nums1[l] < nums2[r]) {
      l++;
    } else if (nums1[l] > nums2[r]) {
      r++;
    } else {
      l++;
      r++;
    }
  }

  if (l < nums1.length) {
    result = nums1[l];
  } else if (r < nums2.length) {
    result = nums2[r];
  }

  return result;
}

console.log(minimumAddedInteger([3, 5, 5, 3], [7, 7]));

// 3 ,3, 5, 5
// 7, 7
//

// [4,6,3,1,4,2,10,9,5]
// [5,10,3,2,6,1,9]

// 1,2,3,4,4,5,6,9,10
// 1,2,3,   ,5,6,9,10

// [4,20,16,12,8]
// 12,16,20,21,23

// [14,18,10]
// 10,14,18
