function hIndex(citations: number[]): number {
  if (citations.length === 1) {
    if (citations[0]) return 1;
    else return 0;
  }
  let l = 0,
    r = citations.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    console.log(mid, l, r);

    if (citations[mid] === r - mid + 1) return citations[mid];

    if (citations[mid] < r - mid + 1) l = mid;

    if (citations[mid] > r - mid + 1) r = mid;
  }

  return 0;
}

console.log(hIndex([1, 2, 100]));
