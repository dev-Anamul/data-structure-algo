function findClosestNumber(nums: number[]): number {
  let minDif = Number.MAX_SAFE_INTEGER,
    maxNum = Number.MIN_SAFE_INTEGER;

  for (let num of nums) {
    let dif = Math.abs(0 - num);

    if (dif < minDif) {
      minDif = dif;
      maxNum = num;
    } else if (dif === minDif) {
      maxNum = Math.max(maxNum, num);
    }
  }

  return maxNum;
}

console.log(findClosestNumber([2, -1, 1]));
