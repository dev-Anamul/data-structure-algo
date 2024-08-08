function findMatrix(nums: number[]): number[][] {
  let obj: { [key: number]: number } = {};

  let maxLen = 1;
  for (let num of nums) {
    if (obj[num]) {
      obj[num]++;
      maxLen = Math.max(maxLen, obj[num]);
    } else obj[num] = 1;
  }

  let result: number[][] = [];

  for (let i = 0; i < maxLen; i++) {
    let temp: number[] = [];
    for (let key of Object.keys(obj)) {
      if (obj[+key]) {
        temp.push(+key);
        obj[+key]--;
        if (obj[+key] === 0) delete obj[+key];
      }
    }

    result.push(temp);
    temp = [];
  }

  return result;
}

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
