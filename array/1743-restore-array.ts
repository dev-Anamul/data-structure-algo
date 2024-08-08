function restoreArray(adjacentPairs: number[][]): number[] {
  let set = new Set<number>();
  let result: number[] = [];

  for (let [v1, v2] of adjacentPairs) {
    if (set.has(v1) && set.has(v2)) continue;
    else if (v1 < v2) {
      if (!result.length) result.push(v1, v2);
      else {
        if (set.has(v1)) result.splice(result.lastIndexOf(v1) + 1, 0, v2);
        else if (set.has(v2)) result.splice(result.lastIndexOf(v2) + 1, 0, v1);
        else result.push(v1, v2);
      }
    } else {
      if (!result.length) result.push(v2, v1);
      else {
        if (set.has(v1)) result.splice(result.lastIndexOf(v1) + 1, 0, v2);
        else if (set.has(v2)) result.splice(result.lastIndexOf(v2) + 1, 0, v1);
        else result.push(v2, v1);
      }
    }

    set.add(v1);
    set.add(v2);
  }

  return result;
}

console.log(
  restoreArray([
    [4, -10],
    [-1, 3],
    [4, -3],
    [-3, 3],
  ])
);
