
### 🔢 Tipos Numéricos

|Tipo|Descrição|
|---|---|
|`SMALLINT`|Inteiro de 2 bytes (−32.768 a +32.767)|
|`INTEGER` ou `INT`|Inteiro de 4 bytes (−2 bilhões a +2 bilhões)|
|`BIGINT`|Inteiro de 8 bytes (±9 quintilhões)|
|`DECIMAL(p,s)`|Precisão exata com p dígitos e s casas decimais|
|`NUMERIC(p,s)`|Igual ao `DECIMAL`, usado para precisão exata|
|`REAL`|Ponto flutuante de 4 bytes (precisão ~6 dígitos)|
|`DOUBLE PRECISION`|Ponto flutuante de 8 bytes (precisão ~15 dígitos)|
|`SERIAL`|Inteiro auto-incrementável (usado como ID)|


### 🔤 Tipos de Texto

| Tipo         | Descrição                            |
| ------------ | ------------------------------------ |
| `CHAR(n)`    | Texto de tamanho fixo                |
| `VARCHAR(n)` | Texto de tamanho variável com limite |
| `TEXT`       | Texto de tamanho variável sem limite |

### 📅 Tipos de Data e Hora

| Tipo        | Descrição                    |
| ----------- | ---------------------------- |
| `DATE`      | Apenas data (AAAA-MM-DD)     |
| `TIME`      | Apenas hora (HH:MM:SS)       |
| `TIMESTAMP` | Data e hora combinadas       |
| `INTERVAL`  | Diferença entre datas/tempos |

### ✅ Tipo Booleano

| Tipo      | Descrição                              |
| --------- | -------------------------------------- |
| `BOOLEAN` | Verdadeiro (`TRUE`) ou falso (`FALSE`) |

### 📦 Tipos Especiais

| Tipo             | Descrição                                   |
| ---------------- | ------------------------------------------- |
| `BYTEA`          | Dados binários (ex: arquivos, imagens)      |
| `ENUM`           | Lista de valores pré-definidos              |
| `ARRAY`          | Vetores de qualquer tipo de dado            |
| `JSON` / `JSONB` | Dados em formato JSON (texto ou binário)    |
| `UUID`           | Identificador universal único               |
| `INET` / `CIDR`  | Endereços IP e redes                        |
| `GEOMETRIC`      | Tipos como `POINT`, `LINE`, `BOX`, `CIRCLE` |
