function wateringPlants(plants: number[], capacity: number): number {
  let step = 0;
  let temp = capacity;

  for (let i = 0; i < plants.length - 1; i++) {
    temp -= plants[i];
    if (temp < (plants[i + 1] || -1)) {
      step += 2 * (i + 1);
      temp = capacity;
    }
  }

  return step + plants.length;
}

console.log(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8));
