function minFlips(target: string): number {
  let count = 0;

  let l = 0,
    r = 0;

  while (target.charAt(r) === "0") {
    l++;
    r++;
  }

  if (l === target.length - 1) return 0;

  while (r < target.length) {
    if (target.charAt(l) !== target.charAt(r)) {
      l = r;
      count++;
    }

    r++;
  }

  count += 1;

  return count;
}

console.log(minFlips("001011101"));
