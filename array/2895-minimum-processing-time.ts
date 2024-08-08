function minProcessingTime(processorTime: number[], tasks: number[]): number {
  processorTime.sort((a, b) => a - b);
  tasks.sort((a, b) => b - a);

  let maxTime = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < processorTime.length; i++) {
    maxTime = Math.max(maxTime, processorTime[i] + tasks[i * 4]);
  }

  return maxTime;
}

console.log(minProcessingTime([10, 20], [2, 3, 1, 2, 5, 8, 4, 3]));

// 8, 10
// 1, 2, 2, 3, 4, 5, 7, 8
