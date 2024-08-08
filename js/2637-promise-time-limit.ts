type Fn = (...params: any[]) => Promise<any>;

function _timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const promise = fn(...args);

    const timeOutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    return Promise.race([promise, timeOutPromise]);
  };
}

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
      fn(...args)
        .then(resolve)
        .catch(reject);
    });
  };
}
