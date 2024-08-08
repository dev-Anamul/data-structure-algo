function minimumRecolors(blocks: string, k: number): number {
  let l = 0,
    r = 0,
    whiteCount = 0,
    minOp = Number.MAX_SAFE_INTEGER;

  while (r < blocks.length) {
    if (blocks.charAt(r) === "W") whiteCount++;

    if (r - l + 1 >= k) {
      minOp = Math.min(minOp, whiteCount);
      if (blocks.charAt(l) === "W") whiteCount--;
      l++;
    }

    r++;
  }

  return minOp;
}

console.log(minimumRecolors("WBWBBBW", 2));
