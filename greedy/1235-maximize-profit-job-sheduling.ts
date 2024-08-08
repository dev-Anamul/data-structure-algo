function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  let combinedArr: number[][] = [];

  for (let i = 0; i < startTime.length; i++) {
    combinedArr.push([startTime[i], endTime[i], profit[i]]);
  }

  combinedArr.sort((a, b) => a[1] - b[1]);

  console.log(combinedArr);

  let totalProfit = 0;
  let freeTime = combinedArr[0][1];

  let temp = combinedArr[0][2];

  for (let i = 1; i < combinedArr.length; i++) {
    let [sTime, eTime, p] = combinedArr[i];

    if (sTime >= freeTime) {
      console.log(combinedArr[i]);

      totalProfit += Math.max(temp, p);
      freeTime = eTime;
      temp = combinedArr[i + 1][2];
    } else temp = Math.max(temp, p);
  }

  if (temp === combinedArr[combinedArr.length - 1][2]) totalProfit + temp;
  return totalProfit;
}

console.log(
  jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])
);
