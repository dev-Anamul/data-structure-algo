function heightChecker(heights: number[]): number {
  const sortHeight = [...heights].sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (sortHeight[i] !== heights[i]) count++;
  }

  return count;
}
