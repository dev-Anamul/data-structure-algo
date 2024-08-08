class TNode {
  val: number;
  left: TNode | null;
  right: TNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const iterativePostOrder = (node: TNode | null) => {
  let current: TNode | null = node;
  const stack: TNode[] = [];
  const res: number[] = [];

  while (current !== null || stack.length) {
    // go to the left most node
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      // go to the right most node and poll out
      let temp: TNode | null = stack[stack.length - 1].right;

      // poll out node from  the stack
      if (temp === null) {
        temp = stack.pop() as TNode;
        res.push(temp.val);

        // before go to the right most check right node is already visited or not
        while (stack.length && temp === stack[stack.length - 1].right) {
          temp = stack.pop() as TNode;
          res.push(temp?.val);
        }

        // set right node as current node
      } else current = temp;
    }
  }

  return res;
};

// tree
const root = new TNode(1);
root.left = new TNode(2);
root.right = new TNode(3);
root.left.left = new TNode(7);
root.left.right = new TNode(6);
root.right.left = new TNode(5);
root.right.right = new TNode(4);

// iterative pre order
console.log("Print iterative pre order of binary tree: ");
console.log(iterativePostOrder(root));
