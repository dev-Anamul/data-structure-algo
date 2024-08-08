function maxRepeating(sequence: string, word: string): number {
  let count = 0;
  let i = 0;
  while (i < sequence.length) {
    if (sequence.charAt(i) == word.charAt(0)) {
      if (sequence.substring(i, i + word.length) === word) {
        count++;
        i += word.length;
      } else {
        i++;
        count = 0;
      }
    } else {
      i++;
      //   count = 0;
    }
  }

  return count;
}

console.log(maxRepeating("ababc", "ab"));
