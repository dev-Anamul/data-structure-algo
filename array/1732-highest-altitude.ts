function largestAltitude(gain: number[]): number {
  const altitudes = [0];

  for (let n of gain) {
    altitudes.push(altitudes[altitudes.length - 1] + n);
  }

  return Math.max(...altitudes);
}

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
