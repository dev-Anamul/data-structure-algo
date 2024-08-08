function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let setBit = 0;
    let n = i;
    while (n) {
      setBit += n % 2;
      n = n >> 1;
    }

    if (setBit === k) sum += nums[i];
  }

  return sum;
}
