function isAcronym(words: string[], s: string): boolean {
  if (words.length !== s.length) return false;

  for (let i = 0; i < words.length; i++) {
    if (s.charAt(i) !== words[i].charAt(0)) return false;
  }

  return true;
}

console.log(isAcronym(["a", "b", "c"], "abcd"));
