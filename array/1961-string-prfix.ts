function isPrefixString(s: string, words: string[]): boolean {
  for (let word of words) {
    if (!s.startsWith(word)) return false;
    s = s.substring(word.length);
    if (s === "") break;
  }

  return !s;
}

console.log(isPrefixString("aaa", ["aa", "aaa", "fjaklfj"]));
