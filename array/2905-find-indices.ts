function findIndices(
  nums: number[],
  indexDifference: number,
  valueDifference: number
): number[] {
  let l = 0,
    r = indexDifference;
  let result: number[][] = [];

  while (r < nums.length && r - l >= indexDifference) {
    if (Math.abs(nums[l] - nums[r]) >= valueDifference) {
      result.push([l, r]);
      //   l++;
    }

    if (r === nums.length - 1) l++;
    else r++;
  }

  //   console.log(result);

  if (result.length == 2 || !result.length) return [-1, -1];

  return result[0];
}

console.log(findIndices([1, 2, 3], 2, 4));
