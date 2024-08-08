class NodeN {
  data: number;
  left: NodeN | null;
  right: NodeN | null;
  constructor(val: number) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

const printPreOrder = (node: NodeN | null) => {
  if (node === null) return;

  // log the data
  console.log(node.data);

  // go to the left
  printPreOrder(node.left);

  // go to the right
  printPreOrder(node.right);
};

const main = () => {
  const root: NodeN = new NodeN(1);

  root.left = new NodeN(2);
  root.right = new NodeN(3);
  root.left.left = new NodeN(4);
  root.left.right = new NodeN(5);
  root.right.right = new NodeN(6);

  // print the output
  console.log("Print pre order traversal of binary tree: ");
  printPreOrder(root);
};

main();
