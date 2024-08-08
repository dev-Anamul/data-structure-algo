function balancedStringSplit(s: string): number {
  let subStrCount = 0;
  let lCount = 0;
  let rCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "L") lCount++;
    else if (s.charAt(i) === "R") rCount++;

    if (lCount === rCount) {
      subStrCount++;
      lCount = 0;
      rCount = 0;
    }
  }

  return subStrCount;
}

console.log(balancedStringSplit("LLLLRRRR"));
