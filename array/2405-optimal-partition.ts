function partitionString(s: string): number {
  let count = 0;
  let temp = "";

  for (let char of s) {
    if (!temp.includes(char)) temp += char;
    else {
      count++;
      temp = char;
    }
  }

  if (temp !== "") count++;

  return count;
}

console.log(partitionString("abacaba"));
