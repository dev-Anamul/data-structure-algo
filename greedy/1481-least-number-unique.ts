function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  let map = new Map<number, number>();

  for (let num of arr) {
    if (map.has(num)) map.set(num, (map.get(num) as number) + 1);
    else map.set(num, 1);
  }
  let combined = Array.from(map).sort((a, b) => a[1] - b[1]);

  for (let [num, freq] of combined) {
    if (k >= freq) {
      map.delete(num);
      k -= freq;
    } else break;
  }

  //   console.log(map);

  return map.size;
}

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
