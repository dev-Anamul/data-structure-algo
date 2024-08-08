function minSetSize(arr: number[]): number {
  let map = new Map<number, number>();

  for (let num of arr) {
    if (map.has(num)) map.set(num, (map.get(num) as number) + 1);
    else map.set(num, 1);
  }

  let freqArr = Array.from(map).sort((a, b) => b[1] - a[1]);

  let minSize = 0;
  let len = 0;

  for (let [key, val] of freqArr) {
    len += val;
    minSize += 1;

    if (len >= Math.floor(arr.length / 2)) return minSize;
  }

  return minSize;
}

console.log(minSetSize([7, 7, 7, 7, 7, 7]));
