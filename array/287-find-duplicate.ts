function findDuplicate(nums: number[]): number {
  let set = new Set<number>();
  for (let num of nums) {
    if (set.has(num)) return num;
    else set.add(num);
  }

  return -1;
}

console.log(findDuplicate([3, 1, 3, 4, 2]));
