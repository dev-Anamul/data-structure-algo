interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function (fn) {
  let obj = {};

  this.forEach((el) => {
    let key = fn(el);

    if (!obj[key]) obj[key] = [];

    obj[key].push(el);
  });

  return obj;
};
