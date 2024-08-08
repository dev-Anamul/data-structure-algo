function findWordsContaining(words: string[], x: string): number[] {
  const numbers: number[] = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      numbers.push(i);
      break;
    }
  }

  return numbers;
}
