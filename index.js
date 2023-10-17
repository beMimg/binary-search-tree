import Tree, { prettyPrint } from './tree.js';

const arrEx = [20, 40, 32, 2, 4, 1, 5, 7, 8, 34];
const tree = new Tree(arrEx);
prettyPrint(tree.root);
console.log(tree);
console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
console.log(tree.height());
console.log(tree.depth());
console.log(tree.isBalanced());
console.log(tree.rebalance());
