function bubleSort(nums: number[]): number[] {
  let isSwap = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    isSwap = 0;
    console.log(i);

    for (let j = i + 1; j <= nums.length - i; j++) {
      if (nums[j - 1] > nums[j]) {
        let temp = nums[j - 1];
        nums[j - 1] = nums[j];
        nums[j] = temp;

        isSwap++;
      }
    }
    if (isSwap == 0) break;
  }

  return nums;
}

console.log(bubleSort([1, 3, 9, 6]));
