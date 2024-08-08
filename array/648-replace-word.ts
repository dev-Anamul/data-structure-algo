function replaceWords(dictionary: string[], sentence: string): string {
  const wordArr = sentence.split(" ");

  for (let word of dictionary) {
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i].startsWith(word)) wordArr[i] = word;
    }
  }

  return wordArr.join(" ");
}

console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));
