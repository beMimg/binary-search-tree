import { Tree, prettyPrint } from './tree.js';

let test = [2];
const tree = new Tree(test);
prettyPrint(tree.root);
console.log(tree);
tree.insert(1);
tree.insert(3);
tree.insert(4);
tree.insert(7);
tree.insert(5);
