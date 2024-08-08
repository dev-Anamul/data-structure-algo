function finalString(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "i") {
      result = reverseString(result);
    } else {
      result += s.charAt(i);
    }
  }

  return result;
}

const reverseString = (s: string) => {
  let reStr = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reStr += s.charAt(i);
  }

  return reStr;
};

console.log(finalString("poiinter"));
