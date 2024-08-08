function findDuplicates(nums: number[]): number[] {
  const map = new Map();
  const result: number[] = [];

  for (let num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);

    if (map.get(num) === 2) {
      result.push(num);
      map.delete(num);
    }
  }

  return result;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
