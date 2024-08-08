function countTestedDevices(batteryPercentages: number[]): number {
  let testedDevice = 0;
  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      for (let j = i + 1; j < batteryPercentages.length; j++) {
        if (batteryPercentages[j] > 0) batteryPercentages[j] -= 1;
      }

      testedDevice += 1;
    }
  }

  return testedDevice;
}

console.log(countTestedDevices([0, 1, 2]));
