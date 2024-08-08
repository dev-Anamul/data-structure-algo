function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let firstNum = nums[i];
      let secondNum = nums[j];

      let start = j + 1;
      let end = nums.length - 1;
      while (start < end) {
        let sum = firstNum + secondNum + nums[start] + nums[end];

        if (sum === target) {
          let arr = [firstNum, secondNum, nums[start], nums[end]];

          if (!result.some((el) => JSON.stringify(el) == JSON.stringify(arr)))
            result.push(arr);

          start += 1;
          end -= 1;
        } else if (sum > target) end -= 1;
        else start += 1;
      }
    }
  }

  return result;
}

console.log(fourSum([2, 2, 2, 2, 2], 8));
