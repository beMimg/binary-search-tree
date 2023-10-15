import Tree, { prettyPrint } from './tree.js';

const arrEx = [0, 1, 2, 3];
const tree = new Tree(arrEx);
prettyPrint(tree.root);
console.log(tree);
tree.delete(2);
tree.insert(5);
