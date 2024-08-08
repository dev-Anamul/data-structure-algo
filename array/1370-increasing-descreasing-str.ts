function sortString(s: string): string {
  s = s
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

  let j = 0;
  let result = "";

  while (s.length) {
    if (j % 2 === 0) {
      result += s.substring(0, 2);
      s = s.substring(2);
      j++;
    } else {
      result += reverseString(s.substring(s.length - 5));
      s = s.substring(0, s.length - 4);
      j++;
    }
  }

  return result;
}

const reverseString = (s: string) => {
  let result = "";
  let i = s.length - 1;
  while (i >= 0) {
    result += s.charAt(i);
    i--;
  }

  return result;
};
