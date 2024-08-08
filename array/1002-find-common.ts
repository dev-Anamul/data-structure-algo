function commonChars(words: string[]): string[] {
  let wordObj: { [key: string]: number } = {};
  let result: string[] = [];

  for (let i = 0; i < words[0].length; i++) {
    if (wordObj[words[0].charAt(i)])
      wordObj[words[0].charAt(i)] = wordObj[words[0].charAt(i)] + 1;
    else wordObj[words[0].charAt(i)] = 1;
  }

  for (let i = 1; i < words.length; i++) {
    let newObj: { [key: string]: number } = {};

    for (let j = 0; j < words[i].length; j++) {
      let char = words[i].charAt(j);
      if (newObj[char]) newObj[char] = newObj[char] + 1;
      else newObj[char] = 1;
    }

    let arr: string[] = [];

    Object.keys(newObj).forEach((key) => {
      if (wordObj[key]) {
        let gArr = Array(Math.min(wordObj[key], newObj[key])).fill(key);
        arr = arr.concat(gArr);
        newObj[key] = Math.min(wordObj[key], newObj[key]);
      } else delete newObj[key];
    });
    wordObj = newObj;
    result = arr;
  }

  return result;
}

console.log(
  commonChars([
    "bbddabab",
    "cbcddbdd",
    "bbcadcab",
    "dabcacad",
    "cddcacbc",
    "ccbdbcba",
    "cbddaccc",
    "accdcdbb",
  ])
);
