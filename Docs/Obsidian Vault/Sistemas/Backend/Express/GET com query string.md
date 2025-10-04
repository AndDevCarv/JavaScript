
**URL usada:** `http://localhost:3000/jokes?id=3`

```js
app.get("/jokes/:id", (req, res) => {
  const searchId = parseInt(req.params.id)
  const searchJoke = jokes.find((joke) => joke.id === searchId);
  res.send(searchJoke)
})
```

**Importante:** `req.params` é usado para acessar parâmetros de rota (`:id`).

#### 🔸 `app.get("/jokes/:id", ...)`

Define uma rota GET com um **parâmetro de rota dinâmico** chamado `id`.

#### 🔸 `req.params.id`

Extrai o valor do parâmetro `id` diretamente da URL. Exemplo: se a URL for `/jokes/3`, então `req.params.id === "3"` (como string).

#### 🔸 `parseInt(...)`

Converte o valor de `id` para número, já que os IDs no array são numéricos.

#### 🔸 `jokes.find(...)`

Percorre o array `jokes` e retorna o **primeiro** objeto onde `joke.id === searchId`.

### ⚠️ **Cuidados**

- `req.params` é usado **somente** com parâmetros de rota (`:id`)
    
- Se quiser usar `?id=3`, deve trocar para `req.query.id` e definir a rota como `"/jokes"`
    
- Sempre converta `req.params.id` para número se o array usa IDs numéricos
    
- Adicionar tratamento de erro evita respostas vazias ou confusas