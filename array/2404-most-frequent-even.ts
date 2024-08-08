function mostFrequentEven(nums: number[]): number {
  let map = new Map<number, number>();

  for (let num of nums) {
    if (num % 2 === 0) {
      if (map.has(num)) map.set(num, (map.get(num) as number) + 1);
      else map.set(num, 1);
    }
  }

  if (!map.size) return -1;

  let large = Number.MIN_SAFE_INTEGER;
  let result = Number.MAX_SAFE_INTEGER;
  console.log(map);

  map.forEach((value, key) => {
    console.log("value", value);
    console.log("large", large);

    if (large <= value) {
      if (large === value) result = Math.min(key, result);
      else result = key;

      large = value;
    }
  });

  return result;
}

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
