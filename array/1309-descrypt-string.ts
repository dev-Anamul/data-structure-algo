function freqAlphabets(s: string): string {
  let ltrObj: { [key: string]: string } = {
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
    "5": "e",
    "6": "f",
    "7": "g",
    "8": "h",
    "9": "i",
    "10#": "j",
    "11#": "k",
    "12#": "l",
    "13#": "m",
    "14#": "n",
    "15#": "o",
    "16#": "p",
    "17#": "q",
    "18#": "r",
    "19#": "s",
    "20#": "t",
    "21#": "u",
    "22#": "v",
    "23#": "w",
    "24#": "x",
    "25#": "y",
    "26#": "z",
  };

  let result = "";

  let i = s.length - 1;
  while (i >= 0) {
    if (s.charAt(i) === "#") {
      result = ltrObj[s.substring(i - 2, i + 1)] + result;
      i -= 3;
    } else {
      result = ltrObj[s.charAt(i)] + result;
      i--;
    }
  }

  return result;
}

console.log(freqAlphabets("1326#"));
