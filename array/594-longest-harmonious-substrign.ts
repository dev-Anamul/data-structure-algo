function findLHS(nums: number[]): number {
  let map = new Map<number, number>();
  let maxLen = 0;

  for (let num of nums) {
    if (map.has(num)) map.set(num, (map.get(num) as number) + 1);
    else map.set(num, 1);
  }

  const arr = Array.from(map).sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] - arr[i - 1][0] === 1)
      maxLen = Math.max(
        maxLen,
        (map.get(arr[i][0]) as number) + (map.get(arr[i - 1][0]) as number)
      );
  }

  return maxLen;
}

console.log(findLHS([1, 1, 1, 1]));
