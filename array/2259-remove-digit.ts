function removeDigit(number: string, digit: string): string {
  let temStr = "";
  let maxStr = "";

  for (let i = 0; i < number.length; i++) {
    if (number.charAt(i) === digit) {
      let str = temStr + number.substring(i + 1);
      if (str > maxStr) maxStr = str;
    }
    temStr += number.charAt(i);
  }

  return maxStr;
}

console.log(removeDigit("133235", "3"));
