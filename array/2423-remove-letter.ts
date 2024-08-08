function equalFrequency(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    let freq: { [key: string]: number } = {};

    for (let j = 0; j < word.length; j++) {
      if (i !== j) {
        let chr = word[j];
        freq[chr] = (freq[chr] || 0) + 1;
      }
    }

    const set = new Set(Object.values(freq));

    if (set.size === 1) return true;
  }

  return false;
}

const _equalFrequency = function (word: string) {
  for (let i = 0; i < word.length; i++) {
    const hash: { [key: string]: number } = {};
    for (let j = 0; j < word.length; j++) {
      if (i !== j) {
        const ch = word[j];
        hash[ch] = (hash[ch] || 0) + 1;
      }
    }
    console.log(hash);

    const hashSet = new Set();

    for (let prop in hash) {
      hashSet.add(hash[prop]);
    }

    if (hashSet.size === 1) {
      return true;
    }
  }

  return false;
};

console.log(equalFrequency("ddaccb"));
