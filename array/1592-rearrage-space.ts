function reorderSpaces(text: string): string {
  let spaceLen = text.split("").reduce((acc, cur) => {
    if (cur === " ") acc += 1;
    else acc += 0;
    return acc;
  }, 0);

  let wordSpace = text.split(" ");
  let onlyWord: string[] = [];
  wordSpace.forEach((element) => {
    if (element !== "") onlyWord.push(element);
  });

  if (onlyWord.length === 1) return onlyWord[0] + " ".repeat(spaceLen);

  return (
    onlyWord.join(" ".repeat(Math.floor(spaceLen / (onlyWord.length - 1)))) +
    " ".repeat(spaceLen % (onlyWord.length - 1))
  );
}

console.log(reorderSpaces(" practice   makes   perfect"));
