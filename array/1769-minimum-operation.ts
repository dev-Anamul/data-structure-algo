function minOperations(boxes: string): number[] {
  let oneIndArr: number[] = [];
  let result: number[] = [];

  for (let i = 0; i < boxes.length; i++) {
    let ch = boxes.charAt(i);
    if (ch === "1") {
      oneIndArr.push(i);
    }
  }

  for (let i = 0; i < boxes.length; i++) {
    let temp = 0;
    for (let j = 0; j < oneIndArr.length; j++) {
      temp += Math.abs(oneIndArr[j] - i);
    }

    result.push(temp);
  }

  return result;
}

console.log(minOperations("001011"));
