function removeDuplicateLetters(s: string): string {
  const obj: { [key: string]: number[] } = {};

  let i = 0;
  for (let char of s) {
    if (obj[char]) obj[char].push(i);
    else obj[char] = [i];

    i++;
  }

  const combined = Array.from(Object.entries(obj)).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  console.log(combined);

  return "";
}

console.log(removeDuplicateLetters("cbacdcbc"));
