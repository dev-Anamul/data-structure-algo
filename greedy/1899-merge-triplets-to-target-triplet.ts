function mergeTriplets(triplets: number[][], target: number[]): boolean {
  for (let i = 0; i < triplets[0].length; i++) {
    let temp = false;
    for (let j = 0; j < triplets.length; j++) {
      if (triplets[j][i] === target[i]) temp = true;
    }

    if (!temp) return false;
    temp = false;
  }

  return true;
}

console.log(
  mergeTriplets(
    [
      [2, 5, 3],
      [2, 3, 4],
      [1, 2, 5],
      [5, 2, 3],
    ],
    [5, 5, 5]
  )
);

// xy
// yx

// [13,5,1,8,21,2]
// 1, 2, 5, 8, 13, 21
