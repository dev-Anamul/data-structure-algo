function kLengthApart(nums: number[], k: number): boolean {
  let lastOneIndex = nums.indexOf(1);

  for (let i = lastOneIndex + 1; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (i - lastOneIndex - 1 < k) return false;
      else lastOneIndex = i;
    }
  }

  return true;
}

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 1], 2));
