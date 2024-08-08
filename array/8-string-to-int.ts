const removeWhiteSpace = (s: string) => {
  let i = 0;
  let res = s;

  while (i < s.length && s.charAt(i) === " ") {
    res = s.substring(i);
    i++;
  }

  return res;
};

function myAtoi(s: string): number {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  const withOutWhite = removeWhiteSpace(s);
  const num = parseInt(withOutWhite);

  if (isNaN(num)) return 0;

  if (num > INT_MAX) return INT_MAX;

  if (num < INT_MIN) return INT_MIN;

  return num;
}
