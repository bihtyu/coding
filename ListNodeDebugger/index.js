let ArrayToListNode = require('./base.js')

const array = [1,2,3,4,5,6];

const arrayToListNode = new ArrayToListNode(array);

console.log(arrayToListNode.transform())
