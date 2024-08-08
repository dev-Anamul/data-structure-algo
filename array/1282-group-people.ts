function groupThePeople(groupSizes: number[]): number[][] {
  let result: number[][] = [];

  let obj: { [key: number]: number[] } = {};

  for (let i = 0; i < groupSizes.length; i++) {
    let gSize = groupSizes[i];
    if (obj[gSize]) {
      if (obj[gSize].length === gSize) {
        result.push([...obj[gSize]]);
        obj[gSize] = [];
      }

      obj[gSize].push(i);
    } else obj[gSize] = [i];
  }

  for (let key of Object.keys(obj)) {
    if (obj[+key].length) result.push([...obj[+key]]);
  }

  return result;
}

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
