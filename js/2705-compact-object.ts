type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map((el) => {
      if (typeof el === "object") {
        return compactObject(el as Obj);
      }
      return el;
    });
  }

  for (let [key, val] of Object.entries(obj)) {
    if (!val) delete obj[key];
    else if (typeof val === "object") {
      obj[key] = compactObject(val);
    }
  }

  return obj;
}

console.log(compactObject([1, 2, 3, 4]));
