import Tree, { prettyPrint } from './tree.js';

const arrEx = [20, 40, 32, 2];
const tree = new Tree(arrEx);
prettyPrint(tree.root);
console.log(tree);
console.log(tree.leverOrder());
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
console.log(tree.height());
