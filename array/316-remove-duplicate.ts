function removeDuplicateLetters(s: string): string {
  let set = new Set(s);
  return Array.from(set).sort().join("");
}

console.log(removeDuplicateLetters("bcabc"));
