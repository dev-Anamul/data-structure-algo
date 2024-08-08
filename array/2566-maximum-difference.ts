function minMaxDifference(num: number): number {
  const map = new Map<string, number>();

  for (let dig of num.toString()) {
    if (map.has(dig)) map.set(dig, (map.get(dig) as number) + 1);
    else map.set(dig, 1);
  }

  let mapedArr = Array.from(map).sort((a, b) => b[1] - a[1]);

  let maxNum = "";
  let minNum = "";

  for (let digit of num.toString()) {
    if (digit === mapedArr[0][0]) {
      maxNum += "9";
      minNum += "0";
    } else {
      maxNum += digit;
      minNum += digit;
    }
  }

  maxNum = maxNum.replace("0", "9");
  minNum = minNum.replace("9", "0");

  //   console.log(mapedArr, minNum, maxNum);

  return +maxNum - +minNum;
}

console.log(minMaxDifference(900));
