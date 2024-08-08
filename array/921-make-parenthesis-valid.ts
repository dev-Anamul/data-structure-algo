function minAddToMakeValid(s: string): number {
  let queue: string[] = [];

  for (let char of s) {
    if (char === ")") {
      if (queue[queue.length - 1] === "(") {
        queue.pop();
      } else queue.push(char);
    } else queue.push(char);
  }

  console.log(queue);

  return queue.length;
}

console.log(minAddToMakeValid("()))(("));
