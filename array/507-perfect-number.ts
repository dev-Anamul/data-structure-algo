function checkPerfectNumber(num: number): boolean {
  let sum = 0;
  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i + num / i;
    }
  }

  return num === sum - num;
}

console.log(checkPerfectNumber(7));
