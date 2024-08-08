function inorderTraversal(root: TreeNode | null): number[] {
  let arr: number[] = [];

  inOrder(root, arr);

  return arr;
}

const inOrder = (root: TreeNode | null, res: number[]) => {
  if (root === null) return;

  // go to the left
  inOrder(root.left, res);

  // put value to the result array
  res.push(root.val);

  // go to the right
  inOrder(root.right, res);
};
