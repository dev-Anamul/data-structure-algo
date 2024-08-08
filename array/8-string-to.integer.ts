function myAtoi(s: string): number {
  let sign = 1;
  let ans = 0;

  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  let i = 0;

  // ignore white space
  while (i < s.length && s[i] === " ") {
    i++;
  }

  // define sign based on the character only after whitespace
  if (i < s.length && s[i] === "-") {
    sign = -1;
    i++;
  } else if (i < s.length && s[i] === "+") {
    i++;
  }

  // now find the integer before coming any character without number
  // if fine any character break
  // increase the number for finding every character  and check if it is less or greater than min or max integer
  while (i < s.length) {
    const charCode = s.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      ans = ans * 10 + (charCode - 48);
      if (ans * sign > INT_MAX) return INT_MAX;
      if (ans * sign < INT_MIN) return INT_MIN;

      i++;
    } else break;
  }

  return ans * sign;
}
