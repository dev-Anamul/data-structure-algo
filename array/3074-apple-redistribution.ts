function minimumBoxes(apple: number[], capacity: number[]): number {
  let totalApple = 0;
  let totalCap = 0;

  for (let aple of apple) {
    totalApple += aple;
  }

  capacity.sort((a, b) => b - a);

  let i = 0;
  for (let cap of capacity) {
    totalCap += cap;
    i++;

    if (totalCap >= totalApple) return i;
  }

  return i;
}

console.log(minimumBoxes([5, 5, 5], [2, 4, 2, 7]));
