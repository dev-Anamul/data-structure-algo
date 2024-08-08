function areAlmostEqual(s1: string, s2: string): boolean {
  let s1Map = new Map();

  for (let i = 0; i < s1.length; i++) {
    let char = s1.charAt(i);
    if (s1Map.has(char)) s1Map.set(char, s1Map.get(char) + 1);
    else s1Map.set(char, 1);
  }

  let count = 0;

  for (let i = 0; i < s2.length; i++) {
    let char = s2.charAt(i);

    if (!s1Map.has(char)) return false;

    if (s1.charAt(i) !== s2.charAt(i)) count++;

    s1Map.set(char, s1Map.get(char) - 1);
    if (s1Map.get(char) === 0) s1Map.delete(char);
  }

  return count === 2 || count === 0;
}

console.log(areAlmostEqual("bankb", "kannb"));
