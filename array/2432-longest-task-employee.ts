function hardestWorker(n: number, logs: number[][]): number {
  let employeeId = logs[0][0];
  let maxTime = logs[0][1];

  for (let i = 1; i < logs.length; i++) {
    let timeUnit = logs[i][1] - logs[i - 1][1];
    let employ = logs[i][0];
    if (maxTime < timeUnit) {
      maxTime = timeUnit;
      employeeId = employ;
    } else if (maxTime === timeUnit) {
      employeeId = Math.min(employeeId, employ);
    }
  }

  return employeeId;
}

console.log(
  hardestWorker(10, [
    [0, 3],
    [2, 5],
    [0, 9],
    [1, 15],
  ])
);
