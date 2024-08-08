function maxFrequencyElements(nums: number[]): number {
  let numObj: { [key: number]: number } = {};

  for (let num of nums) {
    if (numObj[num]) numObj[num] = numObj[num] + 1;
    else numObj[num] = 1;
  }

  let valArr = Object.values(numObj).sort((a, b) => b - a);

  let result = 0;
  console.log(valArr);

  for (let val of valArr) {
    if (val < valArr[0]) break;
    else result += val;
  }

  return result;
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
