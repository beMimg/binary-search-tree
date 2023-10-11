import { Node } from './node.js';

export class Tree {
  constructor(arr) {
    this.arr = this.delDoblesAndOrder(arr);
    this.root = this.buildTree(this.array, 0, this.arr.length - 1);
  }

  delDoblesAndOrder(arr) {
    let array = [...new Set(arr)].sort((a, b) => a - b);
    return array;
  }

  buildTree(arr, start, end) {
    if (start > end) {
      return null;
    }

    let mid = parseInt((start + end) / 2);
    let root = new Node(this.arr[mid]);

    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);

    return root;
  }

  insert(value, root = this.root) {
    if (root == null) {
      root = new Node(value);
      return;
    }

    let current = this.root;
    let prev = null;
    let newNode = new Node(value);

    while (current !== null) {
      if (value > current.data) {
        prev = current;
        current = current.right;
      } else if (value < current.data) {
        prev = current;
        current = current.left;
      }
    }
    if (value > prev.data) {
      prev.right = newNode;
    } else if (value < prev.data) {
      prev.left = newNode;
    }
    prettyPrint(root);
    return root;
  }
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
