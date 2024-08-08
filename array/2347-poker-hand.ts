function bestHand(ranks: number[], suits: string[]): string {
  const rankMap = new Map();
  const suitMap = new Map();

  for (let i = 0; i < ranks.length; i++) {
    let rank = ranks[i];
    let suit = suits[i];

    if (rankMap.has(rank)) rankMap.set(rank, rankMap.get(rank) + 1);
    else rankMap.set(rank, 1);

    if (suitMap.has(suit)) suitMap.set(suit, suitMap.get(suit) + 1);
    else suitMap.set(suit, 1);
  }

  if (suitMap.size === 1) return "Flush";

  let higestEl = Math.max(...Array.from(rankMap.values()));

  if (higestEl >= 3) return "Three of a Kind";
  if (higestEl >= 2) return "Three of a Kind";

  return "High Card";
}
