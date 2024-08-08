
Object.prototype.attrZ = 'Delta'
const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'}


console.log(filho.attr1);

console.log(filho.attr1);

console.log(avo.attr3);

