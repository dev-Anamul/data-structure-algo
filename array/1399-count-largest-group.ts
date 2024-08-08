function countLargestGroup(n: number): number {
  let map = new Map<number, number>();

  for (let i = 1; i <= n; i++) {
    let sum = sumOfDig(i);
    if (map.has(sum)) map.set(sum, (map.get(sum) as number) + 1);
    else map.set(sum, 1);
  }

  let count = 1;
  let mapArr: number[][] = Array.from(map).sort((a, b) => b[1] - a[1]);
  for (let i = 1; i < map.size; i++) {
    if (mapArr[i - 1][1] === mapArr[i][1]) count++;
    else break;
  }

  return count;
}

const sumOfDig = (num: number) => {
  let numArr = num.toString().split("");
  return numArr.reduce((acc, cur) => acc + +cur, 0);
};

console.log(countLargestGroup(13));
