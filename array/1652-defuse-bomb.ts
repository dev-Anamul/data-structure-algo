function decrypt(code: number[], k: number): number[] {
  let curInd = 0;
  let nextInd = curInd;
  let sum = 0;

  if (k > 0) {
    for (let i = 0; i < k; i++) {
      sum += code[i];
    }
  } else {
    for (let i = k; i < 0; i++) {
      sum += code[code.length + i];
    }
  }

  let result: number[] = [];

  while (curInd < code.length) {
    result.push(sum - code[curInd] + code[curInd + k]);
  }
}
