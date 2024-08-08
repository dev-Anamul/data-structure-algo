function mostFrequentIDs(nums: number[], freq: number[]): number[] {
  const map = new Map();
  let result: number[] = [];

  for (let i = 0; i < freq.length; i++) {
    if (map.has(nums[i])) {
      if (freq[i] < 0) {
        map.set(nums[i], map.get(nums[i]) + freq[i]);
        if (map.get(nums[i]) === 0) map.delete(nums[i]);
      }
    } else map.set(nums[i], freq[i]);

    console.log(map);

    if (map.size)
      //   result.push(Array.from(map).sort((a, b) => b[1] - a[1])[0][1]);
      result.push(1);
    else result.push(0);
  }

  return result;
}

console.log(mostFrequentIDs([2, 3, 2, 1], [3, 2, -3, 1]));
