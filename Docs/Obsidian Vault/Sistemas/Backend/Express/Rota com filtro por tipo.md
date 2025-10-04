
**URL com query string:** `http://localhost:3000/filter?type=Science`

```js
app.get("/filter", (req, res) => {
  const searchType = req.query.type;
  const searchJoke = jokes.find((joke) => joke.jokeType === searchType);
  res.send(searchJoke || { error: "Piada não encontrada" });
});
```

#### 🔸 `app.get("/filter", ...)`

Define uma rota GET acessível em `/filter`.

#### 🔸 `req.query.type`

Extrai o valor do parâmetro `type` da query string. Exemplo: se a URL for `...?type=Science`, então `req.query.type === "Science"`.

#### 🔸 `jokes.find(...)`

Percorre o array `jokes` e retorna o **primeiro** objeto onde `joke.jokeType === searchType`.

### ⚠️ **Cuidados**

- `req.query` só funciona com query strings (`?type=...`)
    
- Se quiser usar `/filter/Science`, precisa trocar para `req.params.type`
    
- O `.find()` retorna **apenas uma** piada — se quiser todas, use `.filter()`