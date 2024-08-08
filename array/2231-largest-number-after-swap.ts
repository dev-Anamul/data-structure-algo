function largestInteger(num: number): number {
  let numStr = num.toString().split("");
  let l = 0,
    r = 0;

  while (r < numStr.length) {
    if (numStr[r] > numStr[l] && +numStr[l] % 2 === +numStr[r] % 2) {
      [numStr[r], numStr[l]] = [numStr[l], numStr[r]];
      l++;
    }
    r++;
  }

  return +numStr.join("");
}

console.log(largestInteger(65875));
