function rearrangeArray(nums: number[]): number[] {
  let result: number[] = [];
  let positiveInd = 0;
  let negInd = 1;

  for (let num of nums) {
    if (num > 0) {
      result[positiveInd] = num;
      positiveInd += 2;
    } else {
      result[negInd] = num;
      negInd += 2;
    }
  }

  return result;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
