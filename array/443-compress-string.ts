function compress(chars: string[]): number {
  if (chars.length == 1) return 1;
  let l = 0,
    r = 0,
    s = "";

  while (r < chars.length) {
    if (chars[l] !== chars[r]) {
      s += chars[l];
      if (r - l > 1) s += r - l;

      l = r;
    }

    r++;
  }

  s += chars[l];
  if (r - l > 1) s += r - l;

  //   console.log(s);

  for (let i = 0; i < s.length; i++) {
    chars[i] = s.charAt(i);
  }

  return s.length;
}

console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
