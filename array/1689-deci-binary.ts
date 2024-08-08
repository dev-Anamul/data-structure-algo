function minPartitions(n: string): number {
  let max = -1;

  for (let char of n) {
    max = Math.max(max, +char);
  }

  return max;
}
