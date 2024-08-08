function minimumMoves(s: string): number {
  let l = 0,
    r = 0,
    moves = 0;

  while (r < s.length) {
    if (r - l + 1 === 3) {
      moves++;
      l = r + 1;
    }

    if (s.charAt(l) === "O") l++;

    r++;
  }

  if (l < s.length) moves++;

  return moves;
}

console.log(minimumMoves("OOOOO"));
