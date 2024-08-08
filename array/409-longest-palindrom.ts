function longestPalindrome(s: string): number {
  let obj: { [key: string]: number } = {};

  let len = 0;
  let nonDivisibleTwo = 0;

  for (let char of s) {
    if (obj[char]) obj[char] += 1;
    else obj[char] = 1;
  }

  for (let val of Object.values(obj)) {
    if (val % 2 === 1) nonDivisibleTwo++;
  }

  if (nonDivisibleTwo > 1) return s.length - nonDivisibleTwo + 1;
  return s.length;
}
