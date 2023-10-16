import Tree, { prettyPrint } from './tree.js';

const arrEx = [20, 40, 32, 34, 36, 50, 70, 60, 65, 80, 75, 85];
const tree = new Tree(arrEx);
prettyPrint(tree.root);
console.log(tree);
console.log(tree.leverOrder());
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
