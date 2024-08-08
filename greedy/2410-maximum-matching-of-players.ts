function matchPlayersAndTrainers(
  players: number[],
  trainers: number[]
): number {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  let l = -1,
    count = 0;

  for (let player of players) {
    for (let r = l + 1; r < trainers.length; r++) {
      if (player <= trainers[r]) {
        count++;
        l = r;
        break;
      }
    }

    if (l >= trainers.length) return count;
  }

  return count;
}

console.log(matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8]));
