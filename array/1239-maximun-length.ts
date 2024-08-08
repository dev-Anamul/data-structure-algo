function maxLength(arr: string[]): number {
  const resArr: string[] = [];
  let max = Number.MIN_SAFE_INTEGER;
  subCon(0, arr, [], resArr);

  const finalArr = resArr.filter((el) => {
    let set = new Set();

    for (let chr of el) {
      if (set.has(chr)) return false;
      else set.add(chr);
    }

    max = Math.max(max, el.length);
    return true;
  });

  return max;
}

const subCon = (
  ind: number,
  originArr: string[],
  str: string[],
  resultArr: string[]
) => {
  if (ind >= originArr.length) {
    resultArr.push(str.join(""));
    return;
  }

  // take
  str.push(originArr[ind]);
  subCon(ind + 1, originArr, str, resultArr);

  // not take
  str.pop();
  subCon(ind + 1, originArr, str, resultArr);
};

console.log(maxLength(["un", "iq", "ue"]));
