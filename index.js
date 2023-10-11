import { Tree, prettyPrint } from './tree.js';

let test = [0, 1, 2, 3, 4, 1, 2, 3, 5, 6, 7];
const tree = new Tree(test);
prettyPrint(tree.root);
console.log(tree);
