class StockSpanner {
  private arr: number[];
  constructor() {
    this.arr = [];
  }

  next(price: number): number {
    this.arr.push(price);

    let total = 0;

    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (this.arr[i] <= price) total++;
      else break;
    }

    return total;
  }
}

const stockSpanner: StockSpanner = new StockSpanner();
console.log(stockSpanner.next(100));
console.log(stockSpanner.next(80));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(70));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(75));
console.log(stockSpanner.next(85));
