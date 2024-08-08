function maxVowels(s: string, k: number): number {
  const vowels = ["a", "e", "i", "o", "u"];

  let l = 0,
    r = 0,
    vowelCount = 0,
    max = 0;

  while (r < k) {
    if (vowels.includes(s.charAt(r))) vowelCount++;
    r++;
  }

  //   console.log(l, r);

  max = vowelCount;

  while (r < s.length) {
    if (vowels.includes(s.charAt(r))) vowelCount++;
    if (vowels.includes(s.charAt(l))) vowelCount--;

    // console.log(s.substring(l, r));

    max = Math.max(vowelCount, max);
    l++;
    r++;
  }

  return max;
}

console.log(maxVowels("leetcode", 3));
