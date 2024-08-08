function minOperations(nums: number[]): number {
  let obj: { [key: number]: number } = {};

  for (let num of nums) {
    if (obj[num]) obj[num]++;
    else obj[num] = 1;
  }

  let count = 0;

  for (let val of Object.values(obj)) {
    count += Math.floor(val / 3);
    let remain = val % 3;

    if (remain % 2 == 0) count += Math.floor(remain / 2);
    else if (remain % 2 === 1 && val >= 3) {
      count += Math.floor((remain + 3) / 2) - 1;
    } else return -1;
  }

  return count;
}
