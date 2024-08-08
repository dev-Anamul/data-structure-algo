function frequencySort(s: string): string {
  let mapper = new Map();

  type mapTuple = [string, number];

  for (let i = 0; i < s.length; i++) {
    if (mapper.has(s.charAt(i)))
      mapper.set(s.charAt(i), mapper.get(s.charAt(i)) + 1);
    else mapper.set(s.charAt(i), 1);
  }

  let arr: mapTuple[] = Array.from(mapper);

  arr.sort((a, b) => b[1] - a[1]);

  let result = "";

  arr.forEach((e) => {
    result += e[0].repeat(e[1]);
  });

  return result;
}

console.log(frequencySort("tree"));
