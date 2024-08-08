class FrequencyTracker {
  private obj: { [key: number]: number };
  constructor() {
    this.obj = {};
  }

  add(number: number): void {
    if (this.obj[number]) this.obj[number]++;
    else this.obj[number] = 1;
  }

  deleteOne(number: number): void {
    if (this.obj[number]) this.obj[number]--;
    if (this.obj[number] === 0) delete this.obj[number];
  }

  hasFrequency(frequency: number): boolean {
    return Object.values(this.obj).indexOf(frequency) !== -1;
  }
}
