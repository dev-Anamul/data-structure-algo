function calPoints(operations: string[]): number {
  let resultArr: number[] = [];

  for (let op of operations) {
    if (op === "C") resultArr.pop();
    else if (op === "D") resultArr.push(resultArr[resultArr.length - 1] * 2);
    else if (op === "+")
      resultArr.push(
        resultArr[resultArr.length - 1] + resultArr[resultArr.length - 2]
      );
    else resultArr.push(+op);
  }

  return resultArr.reduce((acc, cur) => acc + cur, 0);
}

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
