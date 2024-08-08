function splitWordsBySeparator(words: string[], separator: string): string[] {
  let result: string[] = [];

  for (let word of words) {
    word.split(separator).forEach((el) => {
      if (el) result.push(el);
    });
  }

  return result;
}
