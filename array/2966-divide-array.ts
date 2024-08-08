function divideArray(nums: number[], k: number): number[][] {
  nums.sort((a, b) => a - b);

  let result: number[][] = [];

  for (let i = 0; i < nums.length / 3; i++) {
    result.push(nums.slice(i * 3, i * 3 + 3));
    if (nums[i * 3 + 2] - nums[i * 3] > k) return [];
  }

  return result;
}

console.log(divideArray([1, 3, 3, 2, 7, 3], 3));
