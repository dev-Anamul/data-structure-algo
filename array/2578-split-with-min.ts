function splitNum(num: number): number {
  const sortNum = num
    .toString()
    .split("")
    .sort((a, b) => a.localeCompare(b));

  let num1 = "";
  let num2 = "";

  for (let i = 0; i < sortNum.length; i++) {
    if (i % 2 === 0) num1 += sortNum[i];
    else num2 += sortNum[i];
  }

  return +num1 + +num2;
}

console.log(splitNum(4325));
