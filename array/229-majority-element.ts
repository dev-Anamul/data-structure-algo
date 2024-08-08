function majorityElement(nums: number[]): number[] {
  const res: number[] = [];
  const numObj: { [key: number]: number } = nums.reduce(
    (acc: { [key: number]: number }, cur) => {
      if (acc[cur]) acc[cur] = acc[cur] + 1;
      else acc[cur] = 1;
      return acc;
    },
    {}
  );

  Object.keys(numObj).forEach((key: string) => {
    if (numObj[+key] > Math.floor(nums.length / 3)) res.push(+key);
  });

  return res;
}

console.log(majorityElement([3, 2, 3]));
