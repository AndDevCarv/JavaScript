Configuração Comum

Cada método aceita um objeto de configuração (`config`) opcional com campos como:

- `baseURL`: URL base para todas as requisições
- `url`: endpoint relativo ou absoluto
- `method`: verbo HTTP (`get`, `post`, etc.)
- `headers`: cabeçalhos personalizados (ex: `{ Authorization: "Bearer token" }`)
- `params`: objeto convertido em query string (ex: `?page=2&limit=10`)
- `data`: corpo da requisição para `post`, `put`, `patch` e `delete` (quando suportado)
- `timeout`: tempo em ms antes de abortar (ex: `5000`)
- `responseType`: formato da resposta (`json`, `blob`, `text`, etc.)
- `auth`: objeto `{ username, password }` para basic auth
- `validateStatus`: função que define quais códigos HTTP tratam como sucesso