function wordPattern(pattern: string, s: string): boolean {
  const map = new Map();
  const sArr = s.split(" ");

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern.charAt(i))) {
      if (map.get(pattern.charAt(i)) !== sArr[i]) return false;
    } else map.set(pattern.charAt(i), sArr[i]);
  }

  return true;
}

console.log(wordPattern("abba", "dog dog dog dog"));
