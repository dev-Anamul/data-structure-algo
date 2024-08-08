const longestSubStr = (s: string): number => {
  const map = new Map();
  let l = 0;
  let r = 0;
  let maxLen = 0;

  while (r < s.length) {
    if (map.has(s.charAt(r))) {
      if (map.get(s.charAt(r)) >= l) {
        l = map.get(s.charAt(r)) + 1;
        map.set(s.charAt(r), r);
      }
    }

    let len = r - l + 1;
    maxLen = Math.max(maxLen, len);
    map.set(s.charAt(r), r);
    r++;
  }

  return maxLen;
};

console.log(longestSubStr("cadazabacd"));
// 1 2 3
