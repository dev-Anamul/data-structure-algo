function checkIfCanBreak(s1: string, s2: string): boolean {
  let sortS1 = s1.split("").sort((a, b) => a.localeCompare(b));
  let sortS2 = s2.split("").sort((a, b) => a.localeCompare(b));

  let s2Com = true;
  let s1Com = true;

  for (let i = 0; i < sortS1.length; i++) {
    if (sortS2[i].localeCompare(sortS1[i]) === -1) s2Com = false;
    if (sortS1[i].localeCompare(sortS2[i]) === -1) s1Com = false;
  }

  return s1Com || s2Com;
}

console.log(checkIfCanBreak("abc", "xya"));
