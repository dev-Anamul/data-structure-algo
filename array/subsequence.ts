const subsequences = (
  ind: number,
  printArr: number[],
  originalArr: number[],
  arrLength: number
) => {
  if (ind >= arrLength) {
    console.log(printArr);
    return;
  }

  printArr.push(originalArr[ind]);
  subsequences(ind + 1, printArr, originalArr, arrLength);

  printArr.pop();
  subsequences(ind + 1, printArr, originalArr, arrLength);
};

subsequences(0, [], [3, 1, 2], 3);
