
```js
const array = ['maçã', 'banana', 'laranja', 'uva', 'melancia']; 

const itemAleatorio = array[Math.floor(Math.random() * array.length)]; 

console.log(itemAleatorio);
```

O math.random oferece um numero aleatório entre 0 e 1, pegamos esse valor e multiplicamos pelo tamanho do array. Em um array de 10 elementos caso o math.random retorne 0.3 o indice seria 3, após isso usamos o floor para arredondar o número para se caso ele fosse 3.3 por exemplo.