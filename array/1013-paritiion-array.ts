function canThreePartsEqualSum(arr: number[]): boolean {
  let sumArr: number[] = [];

  for (let num of arr) {
    sumArr.push((sumArr[sumArr.length - 1] || 0) + num);
  }

  console.log(sumArr);

  return false;
}

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, -1, 2, 0, 1]));
