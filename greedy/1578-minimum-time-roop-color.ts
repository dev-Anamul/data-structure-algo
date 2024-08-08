function minCost(colors: string, neededTime: number[]): number {
  let l = 0,
    r = 0,
    totalTime = 0,
    temp = 0,
    curMin = Number.MIN_SAFE_INTEGER,
    count = 0;

  while (r < colors.length) {
    if (colors.charAt(l) != colors.charAt(r)) {
      console.log(l, r);

      while (l < r) {
        temp += neededTime[l];
        curMin = Math.max(curMin, neededTime[l]);
        count++;
        l++;
      }

      if (count > 1) {
        // console.log(temp, curMin);

        totalTime += temp - curMin;
      } else {
        count = 0;
        temp = 0;
        curMin = Number.MIN_SAFE_INTEGER;
      }
    }

    r++;
  }

  return totalTime;
}

console.log(minCost("aabaa", [1, 2, 3, 4, 1]));

// 13, 5, 1, 8, 21, 2
// 1, 2, 5, 8, 13, 21
