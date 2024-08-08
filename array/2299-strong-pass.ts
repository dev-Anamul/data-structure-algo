function strongPasswordCheckerII(password: string): boolean {
  if (password.length < 8) return false;

  let hasLower = false,
    hasUpper = false,
    hasDigit = false,
    hasSpecial = false;

  let specialChar = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
  ];

  for (let i = 0; i < password.length; i++) {
    if (i !== 0 && password.charAt(i - 1) === password.charAt(i)) return false;

    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)
      hasUpper = true;
    else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
      hasLower = true;
    else if (!isNaN(Number(password.charAt(i)))) hasDigit = true;
    else if (specialChar.includes(password.charAt(i))) hasSpecial = true;
  }

  return hasLower && hasUpper && hasDigit && hasSpecial;
}

console.log(strongPasswordCheckerII("1aB!"));
