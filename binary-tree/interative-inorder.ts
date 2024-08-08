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

const iterativeInOrder = (root: TNode | null): number[] => {
  const stack: TNode[] = [];
  let node: TNode | null = root;
  const preOrder: number[] = [];

  while (true) {
    if (node !== null) {
      // go to the left most node
      stack.push(node);
      node = node.left;
    } else {
      // if stack is empty break the loop
      if (!stack.length) break;

      const top = stack.pop();
      preOrder.push(top?.val as number);

      // go to the right node
      node = top?.right || null;
    }
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
console.log(iterativeInOrder(root));
