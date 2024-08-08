function canConstruct(s: string, k: number): boolean {
  if (s.length < k) return false;

  let obj: { [key: string]: number } = {};

  for (let char of s) {
    if (obj[char]) obj[char]++;
    else obj[char] = 1;
  }

  let count = 0;

  for (let val of Object.values(obj)) {
    if (val % 2 !== 0) count++;
  }

  if (count > k) return false;

  return true;
}
