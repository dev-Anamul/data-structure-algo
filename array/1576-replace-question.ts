function modifyString(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "?") {
      for (let j = 97; j <= 122; j++) {
        let char = String.fromCharCode(j);
        if (
          char !== result.charAt(result.length - 1) &&
          char !== s.charAt(i + 1)
        ) {
          result += char;
          break;
        }
      }
    } else result += s.charAt(i);
  }

  return result;
}

console.log(modifyString("j?qg??b"));
