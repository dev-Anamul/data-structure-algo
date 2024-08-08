function halvesAreAlike(s: string): boolean {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let l = 0,
    r = s.length - 1,
    lVowels = 0,
    rVowels = 0;

  while (l < r) {
    if (vowels.includes(s.charAt(l))) lVowels++;
    if (vowels.includes(s.charAt(r))) rVowels++;

    l++;
    r--;
  }

  return lVowels === rVowels;
}

console.log(halvesAreAlike("textbook"));
