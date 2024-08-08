class CustomStack {
  private size: number = 0;
  values: number[] = [];

  constructor(maxSize: number) {
    this.size = maxSize;
  }

  push(x: number): void {
    if (this.values.length < this.size) {
      this.values.push(x);
    }
  }

  pop(): number {
    if (this.values.length) return this.values.pop() as number;
    return -1;
  }

  increment(k: number, val: number): void {
    if (this.values[k - 1]) {
      for (let i = 0; i < k; i++) {
        this.values[i] += val;
      }
    } else {
      for (let i = 0; i < this.values.length; i++) {
        this.values[i] += val;
      }
    }
  }
}

let stk = new CustomStack(3);
stk.push(1);
stk.push(2);
console.log(stk.values);
console.log(stk.pop());
stk.push(2);
stk.push(3);
stk.push(4);
console.log(stk.values);
stk.increment(5, 100);
console.log(stk.values);
stk.increment(2, 100);
console.log(stk.values);
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
console.log(stk.pop());
