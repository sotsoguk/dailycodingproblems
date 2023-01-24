// reconstruct the binary search tree given its
// postorder traversal sequence

// observations:
// 1. root is always the last element
// 2. all elements in range(0,last-1) smaller than root are
// in the left subtree, all bigger in the right
// 3. find position of last element smaller => split and
// go on recursevily

class treeNode {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

let traversePostOrder = (tree) => {
  if (tree == null) return null;

  let leftOrder = traversePostOrder(tree.left);
  let rightOrder = traversePostOrder(tree.right);
  let result = new Array();
  //   if (leftOrder) result = result.concat(leftOrder);
  //   if (rightOrder) result = result.concat(rightOrder);
  //   result = result.concat(tree.data);
  if (leftOrder) result.push(...leftOrder);
  if (rightOrder) result.push(...rightOrder);
  result.push(tree.data);
  return result;
};

let reconstructFromPostOrder = (postOrder) => {
  if (postOrder.length == 1) {
    return new treeNode((data = postOrder[0]));
  }
  // build tree
  let root = postOrder.slice(-1)[0];
  let endOfLeftTree = 0;
  for (let i = postOrder.length - 2; i >= 0; i--) {
    if (postOrder[i] <= root) {
      endOfLeftTree = i;
      break;
    }
    return new treeNode(
      (data = root),
      ((left = reconstructFromPostOrder(postOrder.slice(0, i + 1))),
      (right = reconstructFromPostOrder(postOrder.slice(i + 2))))
    );
  }
};
let node2 = new treeNode((data = 2));
let node4 = new treeNode((data = 4));
let node8 = new treeNode((data = 8));
let node3 = new treeNode(3, node2, node4);
let node7 = new treeNode(7, null, node8);
let head = new treeNode(5, node3, node7);

console.log(traversePostOrder(head));

let test = [1, 2, 3, 4, 5];

console.log(test.slice(-1)[0]);
let recTree = reconstructFromPostOrder(test);
console.log(head);
