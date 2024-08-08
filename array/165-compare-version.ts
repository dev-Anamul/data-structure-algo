function compareVersion(version1: string, version2: string): number {
  let version1Arr = version1.split(".");
  let version2Arr = version2.split(".");

  let len = Math.max(version1Arr.length, version2Arr.length);

  for (let i = 0; i < len; i++) {
    let v1 = +version1Arr[i] || 0;
    let v2 = +version2Arr[i] || 0;

    if (v1 < v2) return -1;
    else if (v1 > v2) return 1;
  }

  return 0;
}

console.log(compareVersion("1.0", "1.0.0.0"));
