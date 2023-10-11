import { Node } from './node.js';

export class Tree {
  constructor(arr) {
    this.arr = this.removeDupAndSort(arr);
    this.root = this.buildTree(arr, 0, arr.length - 1);
  }

  removeDupAndSort(array) {
    array = [...new Set(array)].sort((a, b) => a - b);
    return array;
  }

  buildTree(arr, start, end) {
    if (start > end) {
      return null;
    }

    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);
    console.log(node);
    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);

    return node;
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
