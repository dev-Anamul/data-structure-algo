function oddString(words: string[]): string {
  let map = new Map<string, [number, string]>();
  for (let word of words) {
    let dif: number[] = [];

    for (let i = 0; i < word.length - 1; i++) {
      let afChaVal = word.charCodeAt(i) - 97;
      let beChaVal = word.charCodeAt(i + 1) - 97;
      let difN = beChaVal - afChaVal;
      dif.push(difN);
    }

    if (map.has(dif.toString())) {
      let [cout, _str] = map.get(dif.toString()) as [number, string];
      map.set(dif.toString(), [(cout += 1), word]);
    } else map.set(dif.toString(), [1, word]);
  }

  for (let [count, str] of Array.from(map.values())) {
    if (count === 1) return str;
  }

  return "";
}

console.log(oddString(["adc", "wzy", "abc"]));
