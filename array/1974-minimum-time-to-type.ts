function minTimeToType(word: string): number {
  let pointer = 97;

  let count = 0;

  let i = 0;
  while (i < word.length) {
    let distance = Math.abs(pointer - word.charCodeAt(i));
    if (distance <= 13) count += distance + 1;
    else count += 26 - distance + 1;
    pointer = word.charCodeAt(i);
    i++;
  }

  return count;
}

console.log(minTimeToType("bza"));
