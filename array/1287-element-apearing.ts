function findSpecialInteger(arr: number[]): number {
  let map = new Map<number, number>();
  for (let num of arr) {
    if (map.has(num)) map.set(num, (map.get(num) as number) + 1);
    else map.set(num, 1);
  }

  for (let [key, val] of Array.from(map)) {
    const per = (val * 100) / arr.length;
    if (per >= 25) return key;
  }

  return -1;
}
