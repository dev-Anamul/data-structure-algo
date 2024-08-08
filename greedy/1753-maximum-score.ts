function maximumScore(a: number, b: number, c: number): number {
  const maxNum = Math.max(a, b, c);
  let sum = a + b + c;
  let sumOfSmall = sum - maxNum;

  if (maxNum >= sumOfSmall) return sumOfSmall;
  else return Math.floor(sum / 2);
}
