function findMaxForm(strs: string[], m: number, n: number): number {
  let ans = 0;

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > ans) {
      let ones = 0,
        zeros = 0;
      for (let j = 0; j < strs[i].length; j++) {
        if (strs[i].charAt(j) === "1") ones++;
        else zeros++;
      }

      if (zeros <= m && ones <= n) ans = strs[i].length;
    }
  }

  return ans;
}

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 4, 3));
