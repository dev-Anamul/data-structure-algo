function rearrangeCharacters(s: string, target: string): number {
  let map = new Map();
  let targetMap = new Map();
  let minCharCount = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  for (let j = 0; j < target.length; j++) {
    let char = target.charAt(j);
    if (targetMap.has(char)) targetMap.set(char, targetMap.get(char) + 1);
    else targetMap.set(char, 1);
  }

  targetMap.forEach((val, key) => {
    minCharCount = Math.min(minCharCount, Math.floor(map.get(key) / val));
  });

  return minCharCount;
}

console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa"));
