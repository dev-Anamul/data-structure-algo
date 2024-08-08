type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  const functionsResult: T[] = [];

  return new Promise((resolve, reject) => {
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          functionsResult[i] = result;

          if (
            functionsResult.filter((_) => _ !== null).length ===
            functions.length
          ) {
            resolve(functionsResult);
          }
        })
        .catch(reject);
    }
  });
}
