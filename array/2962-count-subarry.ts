function countSubarrays(nums: number[], k: number): number {
  let maxEl = Math.max(...nums);
  const arr: number[] = [];

  let r = 0,
    count = 0;

  while (r < nums.length) {
    if (nums[r] === maxEl) arr.push(r);

    if (arr.length === k) {
      count += arr[0] + 1;
      arr.shift();
    }

    console.log("arr", arr);

    r++;
  }

  return count;
}

console.log(
  countSubarrays(
    [
      61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58,
      42, 82, 10, 82, 78, 15, 82,
    ],
    2
  )
);
