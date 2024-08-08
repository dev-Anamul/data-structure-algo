function superPow(a: number, b: number[]): number {
  if (a === 1) return 1;

  let result = 0;
  for (let i = 0; i < b.length; i++) {
    let nm = b[b.length - i - 1];
    let pw = nm * 10 ** i;
    let npw = a ** pw;

    result += pw == 0 ? pw : npw;
  }

  return result % 1337;
}

console.log(superPow(2, [1, 0]));
