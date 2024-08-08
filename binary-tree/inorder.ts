class NodeI {
  data: number;
  left: NodeI | null;
  right: NodeI | null;

  constructor(val: number) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

const printInOrder = (node: NodeI | null) => {
  if (node === null) return;

  // go to the left
  printInOrder(node.left);

  // print the node data
  console.log(node.data);

  // go to the right
  printInOrder(node.right);
};

const main = () => {
  const root: NodeI = new NodeI(1);
  root.left = new NodeI(2);
  root.right = new NodeI(3);
  root.left.left = new NodeI(4);
  root.left.right = new NodeI(5);
  root.right.right = new NodeI(6);

  // print in order traversal of binary tree
  console.log("Print in order traversal of binary tree: ");
  printInOrder(root);
};

main();
