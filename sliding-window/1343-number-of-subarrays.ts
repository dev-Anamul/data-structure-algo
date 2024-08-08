function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let windowSum = 0,
    windowStart = 0,
    count = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      let avg = windowSum / k;
      console.log(avg);

      if (avg >= threshold) count++;
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return count;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
