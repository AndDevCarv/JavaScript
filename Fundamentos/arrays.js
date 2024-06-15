const valores = [1,2,'a',4,'b'];
console.log(valores[2], valores[4]);
valores[4] = 'c';
console.log(valores[2], valores[4])

valores.push(5, false, 8, true);
console.log(valores);

console.log(valores.pop());
console.log(valores);

delete valores[0];
console.log(valores);

