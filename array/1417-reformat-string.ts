function reformat(s: string): string {
  if (s.length === 1) return "";

  let numCount = "";
  let charCount = "";

  for (let i = 0; i < s.length; i++) {
    let chr = s.charCodeAt(i);
    if (chr >= 97 && chr <= 122) charCount += s.charAt(i);
    else numCount += s.charAt(i);
  }

  if (
    !(
      numCount.length - 1 === charCount.length ||
      charCount.length - 1 === numCount.length ||
      numCount.length === charCount.length
    )
  )
    return "";

  let result = "";

  if (numCount.length >= charCount.length) {
    for (let j = 0; j < numCount.length; j++) {
      result += numCount.charAt(j) + charCount.charAt(j) || "";
    }
  }

  if (charCount.length > numCount.length) {
    for (let j = 0; j < charCount.length; j++) {
      result += charCount.charAt(j) + numCount.charAt(j) || "";
    }
  }

  return result;
}

console.log(reformat("a0b1c2"));
