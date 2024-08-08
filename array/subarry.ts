const generateSubarrys = (nums: number[]): number[][] => {
  let resultArr: number[][] = [];
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let isSort = true;
      let subArr = nums.slice(i, j);
      let sum = 0;
      subArr.forEach((e, i) => {
        sum += e;
        if (i !== 0 && subArr[i - 1] > subArr[i]) isSort = false;
      });

      if (isSort) {
        resultArr.push(nums.slice(i, j));
        maxSum = Math.max(sum, maxSum);
      }
    }
  }
  console.log(maxSum);

  return resultArr;
};

console.log(generateSubarrys([12, 17, 15, 13, 10, 11, 12]));
