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
    root = this.#deleteNode(value, root);
  }

  #deleteNode(value, root = this.root) {
    if (root === null) {
      return root;
    }

    if (value > root.data) {
      root.right = this.#deleteNode(value, root.right);
    } else if (value < root.data) {
      root.left = this.#deleteNode(value, root.left);
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
      root.right = this.#deleteNode(root.data, root.right); // Deletes the old node that I've replaced.
    }

    return root;
  }

  getMin(root = this.root) {
    if (!root.left) return root;
    else return this.getMin(root.left.data);
  }

  find(value, root = this.root) {
    if (root === null) return root;

    if (value > root.data) {
      root.right = this.find(value, root.right);
    } else if (value < root.data) {
      root.left = this.find(value, root.right);
    } else {
      console.log(root.data);
    }
    return root;
  }

  leverOrder(root = this.root) {
    if (root == null) {
      return;
    }

    let queue = [];
    queue.push(root);

    let current = null;
    let result = ['Levelorder:'];
    while (queue.length != 0) {
      current = queue.shift();
      if (current.left != null) {
        queue.push(current.left);
      }
      if (current.right != null) {
        queue.push(current.right);
      }
      result.push(current.data);
    }
    return result;
  }

  preOrder(root = this.root) {
    const resultPreOrder = ['Preorder:'];
    this.#getPreOrder(root, resultPreOrder);
    return resultPreOrder;
  }

  #getPreOrder(root, result) {
    if (root == null) return;
    result.push(root.data);
    this.#getPreOrder(root.left, result);
    this.#getPreOrder(root.right, result);
  }

  inOrder(root = this.root) {
    const resultInOrder = ['Inorder:'];
    this.#getInOrder(root, resultInOrder);
    return resultInOrder;
  }

  #getInOrder(root, result) {
    if (root == null) return;
    this.#getInOrder(root.left, result);
    result.push(root.data);
    this.#getInOrder(root.right, result);
  }

  postOrder(root = this.root) {
    let resultPostOrder = ['Postorder:'];
    this.#getPostOrder(root, resultPostOrder);
    return resultPostOrder;
  }

  #getPostOrder(root, result) {
    if (root === null) return;
    this.#getPostOrder(root.left, result);
    this.#getPostOrder(root.right, result);
    result.push(root.data);
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
