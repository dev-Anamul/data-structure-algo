function convertTime(current: string, correct: string): number {
  const hourDif = +correct.split(":")[0] - +current.split(":")[0];
  const minDifForHour = hourDif * 60;
  const minDif = +correct.split(":")[1] - +current.split(":")[1];
  let totoMin = minDifForHour + minDif;

  let operations = 0;

  while (totoMin >= 5) {
    if (totoMin >= 60) {
      operations += Math.floor(totoMin / 60);
      totoMin %= 60;
    } else if (totoMin >= 15) {
      operations += Math.floor(totoMin / 15);
      totoMin %= 15;
    } else if (totoMin >= 5) {
      operations += Math.floor(totoMin / 5);
      totoMin %= 5;
    }
  }

  return operations + totoMin;
}

console.log(convertTime("11:00", "11:01"));
