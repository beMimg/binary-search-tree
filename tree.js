import { Node } from './node.js';

class Tree {
  constructor(arr) {
    this.root = this.buildTree(this.delDoblesAndOrder(arr), 0, arr.length - 1);
  }

  delDoblesAndOrder(arr) {
    let array = [...new Set(arr)].sort((a, b) => a - b);
    return array;
  }

  buildTree(arr, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);

    return node;
  }

  insert(value, root = this.root) {
    if (root === null) {
      root = new Node(value);
      return root;
    }

    if (root.data === value) {
      return;
    }

    if (value > root.data) {
      root.right = this.insert(value, root.right);
    } else {
      root.left = this.insert(value, root.left);
    }
    return root;
  }

  delete(value, root = this.root) {
    root = this._deleteNode(value, root);
  }

  _deleteNode(value, root = this.root) {
    if (root === null) {
      return root;
    }

    if (value > root.data) {
      root.right = this._deleteNode(value, root.right);
    } else if (value < root.data) {
      root.left = this._deleteNode(value, root.left);
    } else {
      if (!root.left && !root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.data = this.getMin(root.right);
      root.right = this._deleteNode(root.value, root.right);
    }
    return root;
  }

  getMin(root = this.root) {
    if (!root.left) return root;
    else return this.getMin(root.left.data);
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

export default Tree;
