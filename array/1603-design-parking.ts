class ParkingSystem {
  private big: number;
  private medium: number;
  private small: number;
  constructor(big: number, medium: number, small: number) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType: number): boolean {
    if (carType === 1) {
      if (this.big === 0) return false;
      else {
        this.big -= 1;
        return true;
      }
    } else if (carType === 2) {
      if (this.medium === 0) return false;
      else {
        this.medium -= 1;
        return true;
      }
    } else if (carType === 3) {
      if (this.small === 0) return false;
      else {
        this.small -= 1;
        return true;
      }
    }
    return false;
  }
}
