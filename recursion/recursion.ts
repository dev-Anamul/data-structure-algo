let count = 0;
const recursion = () => {
  if (count === 4) return;

  console.log(count);
  count++;
  recursion();
};

// recursion();

const printName = (i: number, n: number) => {
  if (i > n) return;
  printName(i + 1, n);
  console.log("anamul", i);
};

// printName(1, 5);

const factorial = (n: number): number => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(3));
