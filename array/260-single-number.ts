function singleNumber(nums: number[]): number[] {
  const map = new Map<number, number>();

  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, (map.get(num) as number) + 1);
      if (map.get(num) === 2) map.delete(num);
    } else map.set(num, 1);
  }

  return Array.from(map).reduce((acc: number[], cur) => {
    acc.push(cur[0]);
    return acc;
  }, []);
}

console.log(singleNumber([-1, 0]));
