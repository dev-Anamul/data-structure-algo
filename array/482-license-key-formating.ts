function licenseKeyFormatting(s: string, k: number): string {
  let result = "";
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== "-") {
      result = s.charAt(i).toUpperCase() + result;
      count++;
    }
    if (count === k) {
      result = "-" + result;
      count = 0;
    }
  }

  while (result.charAt(0) === "-") {
    result = result.substring(1);
  }

  return result;
}

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
