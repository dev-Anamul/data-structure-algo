function topKFrequent(words: string[], k: number): string[] {
  let mapper = new Map();

  type mapTuple = [string, number];

  for (let word of words) {
    if (mapper.has(word)) mapper.set(word, mapper.get(word) + 1);
    else mapper.set(word, 1);
  }

  let wordWitFreqArr: mapTuple[] = Array.from(mapper);

  wordWitFreqArr.sort((a, b) => {
    if (a[1] === b[1]) return a[0].localeCompare(b[0]);
    else return b[1] - a[1];
  });

  console.log(wordWitFreqArr);

  let result: string[] = [];

  for (let i = 0; i < k; i++) {
    result.push(wordWitFreqArr[i][0]);
  }

  return result;
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
