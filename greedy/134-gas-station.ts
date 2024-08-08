function canCompleteCircuit(gas: number[], cost: number[]): number {
  let sum = 0;
  let totalSum = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    let diff = gas[i] - cost[i];
    sum += diff;
    if (sum < 0) {
      sum = 0;
      start = i + 1;
    }

    totalSum += diff;
  }

  if (totalSum < 0) return -1;

  return start;
}

// 4
// 1 + 1 + 1 + 1
// 2 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2
// 2 + 2
