class OrderedStream {
  curPtr: number | null = null;
  incrPtr = 1;
  stream: string[] = [];

  constructor(n: number) {
    this.stream = new Array(n).fill(null)
  }

  insert(idKey: number, value: string): string[] {
    this.stream[idKey] = value
    if (idKey === this.incrPtr) {
      this.incrPtr += this.curPtr || 0;
      let temp = this.stream;
      this.stream = [];
      return temp;
    }

    this.curPtr = Math.max(this.curPtr || 0, idKey);
    this.
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
