function containsPattern(arr: number[], m: number, k: number): boolean {
  let pattArr: string[] = [];
  let count = 1;

  for (let i = 0; i <= arr.length - m; i += m) {
    let patt = arr.slice(i, i + m).join("");

    if (pattArr[pattArr.length - 1] === patt) {
      count++;
      pattArr.push(patt);
    } else {
      count = 1;
      pattArr.push(patt);
    }

    if (count >= k) return true;
  }

  return false;
}

console.log(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2));
