function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[]
): number {
  let reqEnergy = 0,
    reqExperience = 0,
    totalEnergy = 0;

  for (let i = 0; i < energy.length; i++) {
    totalEnergy += energy[i];
    if (initialExperience <= experience[i]) {
      reqExperience += experience[i] - initialExperience + 1;
      initialExperience = experience[i] * 2 + 1;
    } else initialExperience += experience[i];
  }

  if (totalEnergy >= initialEnergy) reqEnergy = totalEnergy - initialEnergy + 1;

  return reqEnergy + reqExperience;
}

console.log(minNumberOfHours(2, 4, [1], [3]));
