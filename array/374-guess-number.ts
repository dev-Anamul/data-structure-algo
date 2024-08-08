const guess = (num: number): number => {
  let pick = 6;
  if (num > pick) return -1;
  else if (num < pick) return 1;
  else return 0;
};

function guessNumber(n: number): number {
  let l = 0,
    r = n;

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    console.log("mid ", mid);

    if (guess(mid) === 0) return mid;
    else if (guess(mid) === -1) {
      l = mid;
    } else if (guess(mid) === 1) {
      r = mid;
    }
  }

  return -1;
}

console.log(guessNumber(10));
