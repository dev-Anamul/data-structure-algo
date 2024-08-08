function nextPermutation(nums: number[]): void {
  let count = 0;
  let l = nums.length - 1;

  while (l > 0) {
    if (nums[l] > nums[l - 1]) {
      let temp = nums[l];
      nums[l] = nums[l - 1];
      nums[l - 1] = temp;
      break;
    }

    l--;
  }

  console.log(nums, l);
  //   console.log(nums);
}

nextPermutation([2, 3, 1]);
