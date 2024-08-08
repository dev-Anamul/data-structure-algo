function findLongestWord(s: string, dictionary: string[]): string {
  const obj: { [key: string]: number } = {};

  let result: string[] = [];

  for (let char of s) {
    if (obj[char]) obj[char]++;
    else obj[char] = 1;
  }

  for (let str of dictionary) {
    let temp = { ...obj };
    let isAdd = true;
    for (let c of str) {
      if (temp[c]) {
        temp[c] -= 1;
        if (temp[c] <= 0) delete temp[c];
      } else {
        isAdd = false;
        break;
      }
    }

    if (isAdd) result.push(str);
  }

  result.sort((a, b) => b.length - a.length);

  let ans = result[0];

  for (let i = 1; i < result.length; i++) {
    if (ans.length === result[i].length) {
      ans = ans < result[i] ? ans : result[i];
    }
  }

  return ans;
}

console.log(findLongestWord("abce", ["abe", "abc"]));
