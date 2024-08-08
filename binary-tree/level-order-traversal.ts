class NodeI {
  val: number;
  left: NodeI | null;
  right: NodeI | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelOrderTraversal = (root: NodeI | null): number[][] => {
  const ans: number[][] = [];

  if (root === null) return ans;

  const queue: NodeI[] = [];
  queue.push(root);

  while (queue.length !== 0) {
    const len = queue.length;
    const level: number[] = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node?.left !== null) queue.push(node?.left as NodeI);
      if (node?.right !== null) queue.push(node?.right as NodeI);
      level.push(node?.val as number);
    }

    ans.push(level);
  }

  return ans;
};

const root = new NodeI(1);
root.left = new NodeI(2);
root.right = new NodeI(3);
root.left.left = new NodeI(7);
root.left.right = new NodeI(6);
root.right.left = new NodeI(5);
root.right.right = new NodeI(4);

// level order traversal of binary node
console.log("Level order traversal of binary node: ");
console.log(levelOrderTraversal(root));
