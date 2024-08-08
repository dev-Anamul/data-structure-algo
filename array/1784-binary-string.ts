function checkOnesSegment(s: string): boolean {
  let firstZeroInd = s.indexOf("0");
  let lastOne = s.lastIndexOf("1");

  if (firstZeroInd === -1) return true;
  return lastOne + 1 === firstZeroInd;
}

console.log(checkOnesSegment("10"));
