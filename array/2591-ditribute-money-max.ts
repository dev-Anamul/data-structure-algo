function distMoney(money: number, children: number): number {
  let childreTo8 = Math.floor(money / 8);
  let reminder = money % 8;
  let remainChildren = children - childreTo8;

  if (remainChildren === 1 && reminder === 4) return childreTo8 - 1;
  if (remainChildren > reminder) childreTo8 - 1;
  if (remainChildren <= reminder) return childreTo8;

  return -1;
}

console.log(distMoney(16, 2));
