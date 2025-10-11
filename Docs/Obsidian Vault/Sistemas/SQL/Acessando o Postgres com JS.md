Primeiro devemos instalar o Postgres com o npm:

```bash
npm i pg
```

Após isso vamos importar o módulo e declarar a const database: 

```js
import pg from "pg";

const db = pg.Client({
  user: "postgres",
  host: "localhost",
  database: "flags",
  password: "123",
  port: 5432
});
```

