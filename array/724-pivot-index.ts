function pivotIndex(nums: number[]): number {
  let totalSum = 0;
  let leftSum = 0;

  for (let num of nums) {
    totalSum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    let rightsum = totalSum - leftSum - nums[i];
    if (rightsum === leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
}

console.log(pivotIndex([1, 2, 3]));

[0, 1, 8, 11, 17, 22, 28];
[0, 6, 11, 17, 20, 27, 28];
