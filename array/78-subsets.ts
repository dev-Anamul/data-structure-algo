function subsets(nums: number[]): number[][] {
  let result: number[][] = [[]];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      result.push(nums.slice(i, j + 1));
    }
  }

  return result;
}

console.log(subsets([1, 2, 3]));

// [17,13,11,2,3,5,7]
// [2,3,5,7,11,13,17]
// [2,13,3,11,5,17,7]
