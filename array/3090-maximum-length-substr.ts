function maximumLengthSubstring(s: string): number {
  let map = new Map();
  let l = 0,
    r = 0,
    maxLen = 0;

  while (r < s.length) {
    if (map.has(s.charAt(r))) map.set(s.charAt(r), map.get(s.charAt(r)) + 1);
    else map.set(s.charAt(r), 1);

    while (map.get(s.charAt(r)) > 2) {
      map.set(s.charAt(l), map.get(s.charAt(l)) - 1);
      l++;
    }

    let len = r - l + 1;
    maxLen = Math.max(maxLen, len);
    r++;
  }

  return maxLen;
}

console.log(maximumLengthSubstring("aaaa"));
