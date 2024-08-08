function maximumGroups(grades: number[]): number {
  grades.sort((a, b) => a - b);

  if (grades.length < 3) return 1;

  let count = 1;
  let lastTotal = grades[0];
  let lastCount = 1;
  let temp = 0;
  let tempCount = 0;

  for (let i = 1; i < grades.length; i++) {
    temp += grades[i];
    tempCount++;

    if (temp > lastTotal && tempCount > lastCount) {
      count++;
      lastTotal = temp;
      temp = 0;
      lastCount = tempCount;
      tempCount = 0;
    }
  }

  if (temp > lastTotal || tempCount > lastCount) return (count += 1);
  return count;
}

console.log(
  maximumGroups([
    34, 42, 20, 18, 26, 29, 23, 47, 3, 15, 45, 27, 14, 29, 46, 4, 39, 4, 40, 12,
    16, 18, 19, 17, 11, 25, 19, 30, 49, 10, 14, 41, 24, 20, 46, 37, 43, 36, 4,
    3, 10, 18, 12, 39, 29,
  ])
);
