function minimumPushes(word: string): number {
  if (word.length <= 8) return word.length;

  let quotient = Math.floor(word.length / 8);
  let reminder = word.length % 8;

  if (quotient === 1) {
    return 8 + reminder * 2;
  }

  if (quotient === 2) {
    return 8 + 16 + reminder * 3;
  }

  return 8 + 16 + 24 + reminder * 4;
}

console.log(minimumPushes("xycdefghij"));
