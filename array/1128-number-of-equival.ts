function numEquivDominoPairs(dominoes: number[][]): number {
  let count = 0;

  for (let j = 0; j < dominoes.length; j++) {
    for (let i = j + 1; i < dominoes.length; i++) {
      let fDom = dominoes[i];
      let lDom = dominoes[j];
      if (
        (fDom[0] === lDom[0] && fDom[1] === lDom[1]) ||
        (fDom[0] === lDom[1] && fDom[1] === lDom[0])
      )
        count++;
    }
  }

  return count;
}
