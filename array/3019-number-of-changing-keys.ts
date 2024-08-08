function countKeyChanges(s: string): number {
  let count = 0;
  let l = 0,
    r = 0;

  while (r < s.length) {
    if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {
      count++;
      l = r;
    }

    r++;
  }

  return count;
}

console.log(countKeyChanges("AaAaAaaA"));
