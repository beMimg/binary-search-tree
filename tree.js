import { Node } from './node.js';

class Tree {
  constructor(arr) {
    this.arr = this.delDoblesAndOrder(arr);
    this.root = this.buildTree(this.arr);
  }

  delDoblesAndOrder(arr) {
    let array = [...new Set(arr)].sort((a, b) => a - b);
    return array;
  }

  buildTree(arr) {
    if (arr.length === 0) return null;

    let mid = Math.floor((arr.length - 1) / 2);
    let node = new Node(arr[mid]);

    node.left = this.buildTree(arr.slice(0, mid));
    node.right = this.buildTree(arr.slice(mid + 1));

    return node;
  }

  insert(value, root = this.root) {
    /* Root is null it means the leaf (end of tree) was reached, 
    now a new Node can be created with the value. */
    if (root === null) {
      root = new Node(value);
      return root;
    }

    // If the value's already on the tree, nothing to add.
    if (root.data === value) {
      return;
    }

    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  delete(value, root = this.root) {}
}

export const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

export default Tree;
