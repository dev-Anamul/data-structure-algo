function countAsterisks(s: string): number {
  const strArr = s.split("|");
  let count = 0;

  for (let i = 0; i < strArr.length; i += 2) {
    let j = 0;
    while (j < strArr[i].length) {
      if (strArr[i].charAt(j) === "*") count++;
      j++;
    }
  }

  return count;
}
