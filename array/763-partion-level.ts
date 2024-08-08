function partitionLabels(s: string): number[] {
  let map = new Map<string, number[]>();

  let i = 0;
  for (let char of s) {
    if (map.has(char)) {
      let [start, end] = map.get(char) || [];
      map.set(char, [Math.min(start, i), Math.max(end, i)]);
    } else map.set(char, [i, i]);

    i++;
  }

  let result: number[] = [];

  let str = 0,
    end = 0;

  for (let [s, e] of Array.from(map.values())) {
    if (str <= s && s <= end) {
      str = Math.min(str, s);
      end = Math.max(end, e);
    } else {
      result.push(end + 1);
      str = s;
      end = e;
    }
  }

  result.push(end + 1);

  let fin = [result[0]];

  for (let i = 1; i < result.length; i++) {
    fin.push(result[i] - result[i - 1]);
  }

  return fin;
}

console.log(partitionLabels("eccbbbbdec"));
