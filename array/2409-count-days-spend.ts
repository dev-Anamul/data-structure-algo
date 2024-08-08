function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string
): number {
  let aliceArrival = arriveAlice.split("-").map((el) => +el);
  let aliceLeave = leaveAlice.split("-").map((el) => +el);
  let bobArrival = arriveBob.split("-").map((el) => +el);
  let bobLeave = leaveBob.split("-").map((el) => +el);

  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (aliceLeave[0] >= bobArrival[0]) {
    console.log("i am in blog one");

    // alice leave after bob arrival
    let totalDays = 0;
    console.log(aliceLeave[1], bobArrival[1], months[bobArrival[0] - 1]);

    while (aliceLeave[0] >= bobArrival[0]) {
      totalDays += months[bobArrival[0] - 1];
      bobArrival[0]++;
    }

    return totalDays;
  } else if (bobLeave[0] >= aliceArrival[0]) {
    // bob leave after alice arrival
    let totalDays = bobLeave[1] - aliceArrival[1];

    while (bobLeave[0] >= aliceArrival[0]) {
      totalDays += months[aliceArrival[0] + 1];
      aliceArrival[0]++;
    }
  }

  return 0;
}

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));
