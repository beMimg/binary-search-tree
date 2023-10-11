import { Tree } from './tree.js';
import { prettyPrint } from './tree.js';
let array = [0, 1, 2, 3, 4];
let tree = new Tree(array);
console.log(tree);
prettyPrint(tree.root);
