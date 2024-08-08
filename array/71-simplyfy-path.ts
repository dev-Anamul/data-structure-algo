function simplifyPath(path: string): string {
  let stack: string[] = [];

  for (let word of path.split("/")) {
    if (word == "..") stack.pop();
    else if (word != "." && word) stack.push(word);
  }

  return "/" + stack.join("/");
}

console.log(simplifyPath("/../"));
