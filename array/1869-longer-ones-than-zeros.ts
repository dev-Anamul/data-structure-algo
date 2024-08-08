function checkZeroOnes(s: string): boolean {
  let l = 0,
    r = 0,
    oneLen = 0,
    zeroLen = 0;

  while (r < s.length) {
    if (s.charAt(l) !== s.charAt(r)) {
      l = r;
    }

    if (s.charAt(l) === "0") {
      let len = r - l + 1;
      zeroLen = Math.max(zeroLen, len);
    }

    if (s.charAt(l) === "1") {
      let len = r - l + 1;
      oneLen = Math.max(oneLen, len);
    }

    r++;
  }

  return oneLen > zeroLen;
}

console.log(checkZeroOnes("110100010"));
