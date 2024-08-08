function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const ans: number[] = [];

  stack.push(0);

  for (let i = 1; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      ans[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }

    stack.push(i);
  }

  while (stack.length) {
    ans[stack[stack.length - 1]] = 0;
    stack.pop();
  }

  return ans;
}

console.log(dailyTemperatures([30, 40, 50, 60]));
