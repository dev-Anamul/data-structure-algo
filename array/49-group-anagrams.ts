function groupAnagrams(strs: string[]): string[][] {
  const res: string[][] = [];

  const strObj: { [key: string]: string[] } = strs.reduce(
    (acc: { [key: string]: string[] }, cur) => {
      let hashVal = hash(cur);
      if (acc[hashVal]) acc[hashVal].push(cur);
      else acc[hashVal] = [cur];
      return acc;
    },
    {}
  );

  Object.keys(strObj).forEach((key) => {
    res.push(strObj[key]);
  });

  return res;
}

const hash = (str: string) => {
  return str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
};

console.log(
  groupAnagrams([
    "cab",
    "tin",
    "pew",
    "duh",
    "may",
    "ill",
    "buy",
    "bar",
    "max",
    "doc",
  ])
);

[
  ["max"],
  ["buy"],
  ["cab"],
  ["bar"],
  ["doc"],
  ["duh", "ill"],
  ["may"],
  ["tin"],
  ["pew"],
];

[
  ["max"],
  ["buy"],
  ["doc"],
  ["may"],
  ["ill"],
  ["duh"],
  ["tin"],
  ["bar"],
  ["pew"],
  ["cab"],
];
