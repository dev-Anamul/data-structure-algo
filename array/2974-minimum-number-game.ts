function numberGame(nums: number[]): number[] {
  let sortNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    [sortNums[i], sortNums[i + 1]] = [sortNums[i + 1], sortNums[i]];
  }

  return sortNums;
}

console.log(numberGame([5, 4, 2, 3]));
