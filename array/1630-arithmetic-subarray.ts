function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  let result: boolean[] = [];

  for (let i = 0; i < l.length; i++) {
    let tempArr = nums.slice(l[i], r[i + 1]).sort((a, b) => a - b);
    console.log(tempArr);

    let dif = tempArr[0] - tempArr[1];
    let res = true;
    for (let j = 2; j < tempArr.length; j++) {
      if (tempArr[j - 1] - tempArr[j] !== dif) res = false;
    }
    result.push(res);
  }

  return result;
}

console.log(
  checkArithmeticSubarrays(
    [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
    [0, 1, 6, 4, 8, 7],
    [4, 4, 9, 7, 9, 10]
  )
);
