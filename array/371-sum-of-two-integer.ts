function getSum(a: number, b: number): number {
  // two values are negative
  if (a < 0 && b < 0) {
    console.log("both are negative");

    if (a < b) {
      for (let i = -1; i >= a; i--) b--;
      return b;
    } else {
      for (let i = -1; i >= b; i--) a--;
      return a;
    }
  }
  // one values are negative
  else if (a < 0 || b < 0) {
    console.log("only one is negative");

    if (a < b) {
      for (let i = -1; i >= a; i--) b--;
      return b;
    } else {
      for (let i = -1; i >= b; i--) a--;
      return a;
    }
  }
  // other case
  else {
    console.log("else case");

    if (a < b) {
      for (let i = 1; i <= a; i++) b++;
      return b;
    } else {
      for (let i = 1; i <= b; i++) a++;
      return a;
    }
  }
}

console.log(getSum(-1, -8));
