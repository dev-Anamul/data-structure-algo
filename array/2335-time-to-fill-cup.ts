function fillCups(amount: number[]): number {
  amount.sort((a, b) => a - b);

  let numofZero = 0;
  let count = 0;
  let remaining = 0;

  for (let num of amount) {
    if (num === 0) numofZero++;

    remaining = num - remaining;
    count++;
  }

  if (numofZero === 2 || numofZero === 1) return Math.max(...amount);

  return count + remaining;
}

console.log(fillCups([5, 1, 2]));
