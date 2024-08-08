// my solution
function threeSumClosest(nums: number[], target: number): number {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        result =
          Math.abs(target - sum) < Math.abs(target - result) ? sum : result;
      }
    }
  }

  return result;
}

/// efficient solution
function _threeSumClosest(nums: number[], target: number): number {
  let closetNum = Number.MAX_SAFE_INTEGER;
  let result = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = firstNum + nums[start] + nums[end];
      if (sum === target) return target;
      else if (Math.abs(sum - target) < closetNum) {
        closetNum = Math.abs(sum - target);
        result = sum;
      }

      if (sum > target) {
        end--;
      } else {
        start++;
      }
    }
  }
  return result;
}
