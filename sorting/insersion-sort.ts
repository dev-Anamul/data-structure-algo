const insersionSort = (nums: number[]): number[] => {
  //
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];

    let j = i;

    while (j >= 0) {
      if (temp < nums[j - 1]) {
        nums[j - 1] = nums[j];
      }
      j--;
    }

    nums[j] = temp;
  }

  return nums;
};

console.log(insersionSort([5, 3, 4, 8, 9, 5, 6, 3, 6, 3]));

// temp 3 , 3 < 5,
