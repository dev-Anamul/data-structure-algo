function sumCounts(nums: number[]): number {
  let sum = 0;
  for (let i = 1; i <= nums.length; i++) {
    sum += i ** 2 * (nums.length - i + 1);
    console.log(sum, i);
  }

  return sum;
}

console.log(sumCounts([1, 2, 1]));
