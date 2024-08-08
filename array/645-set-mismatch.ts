function findErrorNums(nums: number[]): number[] {
  let missMatch: number[] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      if (!nums.includes(i + 1)) missMatch.push(i + 1);
    }

    if (nums[i] === nums[i + 1]) missMatch.unshift(nums[i]);
  }

  return missMatch;
}

console.log(findErrorNums([3, 2, 3, 4, 6, 5]));
