function frequencySort(nums: number[]): number[] {
  let map = new Map<number, number>();

  for (let num of nums) {
    if (map.has(num)) map.set(num, (map.get(num) as number) + 1);
    else map.set(num, 1);
  }

  let numFreqArr = Array.from(map)
    .sort((a, b) => b[0] - a[0])
    .sort((a, b) => a[1] - b[1]);

  return numFreqArr.reduce((acc: number[], cur) => {
    for (let i = 0; i < cur[1]; i++) {
      acc.push(cur[0]);
    }
    return acc;
  }, []);
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
