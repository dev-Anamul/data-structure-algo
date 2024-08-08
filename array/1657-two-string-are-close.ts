function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const map1 = new Map<string, number>();
  for (let chr of word1) {
    if (map1.has(chr)) map1.set(chr, (map1.get(chr) as number) + 1);
    else map1.set(chr, 1);
  }

  const map2 = new Map<string, number>();
  for (let chr of word2) {
    if (map2.has(chr)) map2.set(chr, (map2.get(chr) as number) + 1);
    else map2.set(chr, 1);
  }

  let map1Arr = Array.from(map1.values()).sort((a, b) => b - a);
  let map2Arr = Array.from(map2.values()).sort((a, b) => b - a);

  return map1Arr.toString() === map2Arr.toString();
}

console.log(closeStrings("cabbba", "abbccc"));
