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

    let mid = Math.floor((start + end) / 2);
    let root = new Node(mid);

    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);

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
