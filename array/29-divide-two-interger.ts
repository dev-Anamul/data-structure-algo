function divide(dividend: number, divisor: number): number {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  let sign: number;

  if ((dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0)) {
    sign = -1;
  } else sign = 1;

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  if (divisor === 1) {
    if (sign < 0 && dividend - dividend - dividend < INT_MIN) return INT_MIN;
    else if (sign > 0 && dividend > INT_MAX) return INT_MAX;
    else if (sign < 0) return dividend - dividend - dividend;
    else return dividend;
  }

  let doubleDivisor = divisor << 1;
  let addto = 1 << 1;
  console.log("d", doubleDivisor << 1, addto);
  console.log(doubleDivisor >> 1);

  let quiotient = 0;

  // console.log(doubleDivisor);

  while (dividend >= divisor) {
    if (dividend >= doubleDivisor) {
      dividend -= doubleDivisor;
      quiotient += addto;

      doubleDivisor = doubleDivisor << 1;
      addto = addto << 1;
    } else if (dividend >= doubleDivisor) {
      dividend -= divisor;
      quiotient += addto;
    }

    if (sign < 0 && quiotient - quiotient - quiotient < INT_MIN) return INT_MIN;
    else if (sign > 0 && quiotient > INT_MAX) return INT_MAX;
  }

  if (sign < 0) return quiotient - quiotient - quiotient;
  else return quiotient;
}

// console.log(divide(-2147483648, 4));
console.log(divide(7, -3));
console.log(divide(-7, -3));
console.log(divide(7, 3));
