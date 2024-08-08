function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let set = new Set();
  for (let time of timeSeries) {
    let j = 0;
    while (duration > j) {
      set.add(time + j);
      j++;
    }
  }

  return set.size;
}

console.log(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
