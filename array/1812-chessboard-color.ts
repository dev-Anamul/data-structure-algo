function squareIsWhite(coordinates: string): boolean {
  let ltrObj: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  if (
    (ltrObj[coordinates.charAt(0)] % 2 === 0 &&
      +coordinates.charAt(1) % 2 === 0) ||
    (ltrObj[coordinates.charAt(0)] % 2 === 1 &&
      +coordinates.charAt(1) % 2 === 1)
  ) {
    return false;
  } else return true;
}

console.log(squareIsWhite("h3"));
