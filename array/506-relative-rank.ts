function findRelativeRanks(score: number[]): string[] {
  let sorted = score.slice().sort((a, b) => b - a);
  let map = new Map(sorted.map((v, i) => [v, i + 1]));

  return score.map((v, i) => {
    let rank = map.get(v)!;
    return rank === 1
      ? "Gold Medal"
      : rank === 2
      ? "Silver Medal"
      : rank === 3
      ? "Bronze Medal"
      : String(rank);
  });
}
