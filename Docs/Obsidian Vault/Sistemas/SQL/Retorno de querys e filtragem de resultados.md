Caso base:

```js
app.get("/", async (req, res) => {

  try {
    const totalNumberCountries = await db.query("SELECT COUNT(*) FROM visited_countries");
    const countriesResult = await db.query("SELECT country_code FROM visited_countries");
    let countries = [];

  

    countriesResult.rows.forEach(country => {
        countries.push(country.country_code)
    });

    const total = parseInt(totalNumberCountries.rows[0].count);
    res.render("index.ejs", {total: total, countries: countries})
  } catch (error) {
    console.log(`Error on querys ${error}`);
  }
});
```

🧠 Por que usar `.rows` e depois `.country_code`?

Quando você faz uma consulta com `db.query("SELECT country_code FROM visited_countries")`, o PostgreSQL retorna os dados assim:

```js
{
  rows: [
    { country_code: 'FR' },
    { country_code: 'BR' }
  ]
}
```

Ou seja:

- `rows` é um **array de objetos**, cada um representando uma linha da tabela.
- Cada objeto tem as colunas que você pediu na query — no caso, só `country_code`.

Então, para acessar os valores, você precisa:

1. **Percorrer o array `rows`**
2. **Extrair o campo `country_code` de cada objeto**


🧼 Alternativa mais limpa com `.map()`

Você pode fazer o mesmo com menos código usando [[map()|.map()]] :

```js
const countries = countriesResult.rows.map(row => row.country_code);
```