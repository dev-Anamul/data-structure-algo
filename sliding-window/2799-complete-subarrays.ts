function countCompleteSubarrays(nums: number[]): number {
  let wholeArrElement = new Map<number, number>();

  for (let num of nums) {
    wholeArrElement.set(num, (wholeArrElement.get(num) || 0) + 1);
  }

  let windowElement = new Map<number, number>(),
    windowStart = 0,
    count = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    let rightNum = nums[windowEnd];
    windowElement.set(rightNum, (wholeArrElement.get(rightNum) || 0) + 1);

    while (windowElement.size > wholeArrElement.size) {
      count++;
      let leftNum = nums[windowStart];

      windowElement.set(leftNum, windowElement.get(leftNum)! - 1);
      if (windowElement.get(leftNum) === 0) windowElement.delete(leftNum);

      windowStart++;

      console.log(windowStart, leftNum);
    }
  }

  return count;
}

console.log(countCompleteSubarrays([5, 5, 5, 5]));
