function appendCharacters(s: string, t: string): number {
  let l = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === t.charAt(l)) {
      l++;
    }
  }

  //   console.log(t.substring(l));

  return t.length - l;
}

console.log(appendCharacters("z", "abcde"));
