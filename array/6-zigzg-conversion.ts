function convert(s: string, numRows: number): string {
  let arrStr: string[] = [];
  let isPositive = true;
  let rowNum = 0;

  for (let i = 1; i < s.length; i++) {
    if (Math.floor(i / numRows) % 2 === 0) isPositive = true;
    else isPositive = false;

    if (isPositive) rowNum++;
    else rowNum--;

    console.log(rowNum);
  }

  return "";
}

console.log(convert("PAYPALISHIRING", 3));
