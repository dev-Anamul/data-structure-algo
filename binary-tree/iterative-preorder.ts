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

const iterativePreOrder = (root: TNode | null) => {
  const preOrder: number[] = [];

  if (root === null) return preOrder;

  const stack: TNode[] = [];
  stack.push(root);

  while (stack.length !== 0) {
    const top = stack.pop();

    preOrder.push(top?.val as number);

    if (top?.right !== null) stack.push(top?.right as TNode);
    if (top?.left !== null) stack.push(top?.left as TNode);
  }

  return preOrder;
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
console.log(iterativePreOrder(root));
