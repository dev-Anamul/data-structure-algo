function minimumRounds(tasks: number[]): number {
  let map = new Map<number, number>();

  for (let task of tasks) {
    if (map.has(task)) map.set(task, (map.get(task) as number) + 1);
    else map.set(task, 1);
  }

  let combined = Array.from(map).sort((a, b) => b[1] - a[1]);

  let count = 0;
  console.log(combined);

  for (let [key, freq] of combined) {
    count += Math.floor(freq / 3);
    let remain = freq % 3;

    if (remain === 1 && freq > 3) {
      remain += 3;
      count -= 1;
    }

    count += Math.floor(remain / 2);
    let newRemain = remain % 2;

    if (newRemain) return -1;
  }

  return count;
}

console.log(minimumRounds([2, 3, 3]));

// 6 6 5 4 3 3 3 3 3 3 2
