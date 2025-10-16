📌 `.map()` 

- **Definição**: Método de arrays que cria um **novo array** aplicando uma função a **cada elemento** do array original.
- **Sintaxe**:

```js
array.map(callback)
```

- **Parâmetros**:
    
    - `callback`: função que recebe até três argumentos:
    
    - `element`: o item atual do array
    - `index` (opcional): posição do item
    - `array` (opcional): o array original
    
    - **Retorno**: Um novo array com os resultados da função aplicada a cada item.


Exemplo:

```js
const numeros = [1, 2, 3];
const dobrados = numeros.map(n => n * 2);
// Resultado: [2, 4, 6]
```

🧠 Aplicações comuns

- Transformar valores
- Extrair campos de objetos
- Formatar dados para exibição