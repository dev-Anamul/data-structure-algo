function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let l = 0,
    r = 0,
    count = 0;

  while (l < s.length && r < s.length) {
    if (s[r] >= g[l]) {
      count++;
      l++;
    } else r++;
  }

  return count;
}

console.log(findContentChildren([1, 2], [1, 2, 3]));
