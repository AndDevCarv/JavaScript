
## O que é uma API REST?

**REST** (REpresentational State Transfer - Transferência de Estado Representacional) não é uma linguagem, uma biblioteca ou uma tecnologia. **É um estilo de arquitetura para projetar APIs.**

### 1. Arquitetura Cliente-Servidor

Este é o princípio mais básico. A API deve separar claramente o **cliente** (quem consome os dados) do **servidor** (quem armazena e fornece os dados).

- O cliente não se preocupa com o armazenamento de dados, o que o torna mais simples e focado na interface do usuário.
- O servidor não se preocupa com a interface do usuário, o que o torna focado na lógica de negócio e no fornecimento de dados.

Essa separação permite que eles evoluam de forma independente. Uma equipe pode desenvolver um novo visual para o site (cliente) sem tocar no servidor. Da mesma forma, a equipe de back-end pode otimizar o banco de dados (servidor) sem que o cliente precise ser alterado.

### 2. Stateless (Sem Estado)

Este é um dos princípios mais importantes. **Stateless** significa que cada requisição feita do cliente para o servidor deve conter **toda a informação** que o servidor precisa para entender e processar a requisição.

O servidor não armazena nenhum "contexto" ou "sessão" do cliente entre as requisições.

Voltando à nossa [[API Conceito|analogia]]: toda vez que você chama o garçom, você faz um pedido completo. Você não diz "traga o mesmo que pedi da última vez". O garçom não precisa se lembrar de nada sobre você.

**Por que isso é tão importante?** Porque torna a API muito mais **escalável**. Se o servidor não precisa guardar estado, qualquer servidor pode atender a qualquer requisição. Isso permite distribuir as requisições entre dezenas ou milhares de servidores (usando um Load Balancer), garantindo que a aplicação continue funcionando mesmo com um aumento massivo de usuários.

"Mas e o login? O servidor não precisa saber quem eu sou?" Sim, mas essa informação é enviada pelo cliente **a cada requisição**, geralmente na forma de um [[Autenticação de API com Axios|token de autenticação]] (como um JWT) no cabeçalho.

### 3. Cacheable (Cacheável)

Para melhorar a performance e reduzir a carga no servidor, as respostas de uma API REST devem poder ser cacheadas. A própria resposta deve indicar se ela pode ou não ser armazenada em cache pelo cliente (ou por um servidor de cache intermediário).

Se os dados de um post de blog não mudam a cada segundo, por que o cliente deveria pedi-los ao servidor toda vez? Ele pode guardar uma cópia local (em cache) por alguns minutos ou horas.

Isso é feito através de cabeçalhos HTTP na resposta, como `Cache-Control` e `Expires`.

### 4. Interface Uniforme

Este princípio é o coração do REST e o que garante a simplicidade e o desacoplamento. Ele se divide em quatro sub-princípios:

#### a) Identificação de Recursos (URIs)

Em REST, tudo é um **recurso**: um usuário, um produto, um post, um comentário. Cada recurso deve ser unicamente identificável através de uma **URI** (Uniform Resource Identifier).

Boas práticas para URIs: - Use substantivos, não verbos: `/posts`, e não `/getPosts`. - Use plurais para coleções: `/users`, `/products`. - Use uma hierarquia lógica: `/posts/123/comments`.

Exemplos:
	`https://meublog.com/api/posts` (A coleção de todos os posts) - `https://meublog.com/api/posts/42` (O post específico de ID 42) - `https://meublog.com/api/users/10/posts` (Todos os posts do usuário de ID 10)

#### b) Manipulação de Recursos Através de Representações

O cliente não interage diretamente com o recurso no banco de dados. Ele interage com uma **representação** desse recurso. O formato mais comum para essa representação hoje é o **JSON** (JavaScript Object Notation).

Quando você pede `GET /api/users/1`, você não recebe o objeto "User" da linguagem do back-end. Você recebe um documento JSON que representa o estado atual daquele usuário.

```json
{"id": 1,   
"name": "João Silva",   
"email": "joao.silva@example.com",   
"links": [     { "rel": "self", "href": "/api/users/1" },     
{ "rel": "posts", "href": "/api/users/1/posts" }   ] }
```

#### c) Mensagens Autodescritivas

Cada mensagem (requisição ou resposta) deve ser autossuficiente.

- A **requisição** especifica o que quer fazer (com o verbo HTTP) e sobre qual recurso (com a URI).
- A **resposta** usa **Códigos de Status HTTP** para informar o resultado da operação (ex: `200 OK`, `201 Created`, `404 Not Found`, `500 Internal Server Error`) e o corpo da resposta contém a representação do recurso (em JSON, por exemplo).

#### d) HATEOAS (Hypermedia as the Engine of Application State)

Este é o princípio mais avançado e muitas vezes o menos implementado. A ideia é que a resposta da API deve guiar o cliente sobre quais são os próximos passos possíveis, incluindo links (hipermídia) para outras ações.

Veja o exemplo de JSON acima. Além dos dados do usuário, a API retornou uma lista de `links`. Um deles é o link para o próprio recurso (`self`), e o outro é um link para os posts daquele usuário. Isso permite que o cliente "descubra" como navegar na API sem precisar ter todas as URIs pré-programadas ("hardcoded"). É como navegar em um site: você clica nos links que a página te oferece.

### 5. Sistema em Camadas (Layered System)

O cliente que faz a requisição não precisa saber se está se comunicando diretamente com o servidor final, ou com um intermediário no caminho (como um Load Balancer, um Gateway de API ou um servidor de Cache).

Essa arquitetura em camadas permite adicionar componentes que melhoram a segurança e a escalabilidade sem que o cliente ou o servidor final precisem ser modificados.

### 6. Código sob Demanda (Opcional)

Este é o único princípio opcional. Ele permite que o servidor, em certas situações, envie código executável (como um script JavaScript) para o cliente, estendendo suas funcionalidades temporariamente. É raramente usado na prática em APIs RESTful puras.

## Conclusão

APIs REST são muito mais do que um modismo. Elas são a base da web moderna, permitindo que sistemas complexos e distribuídos se comuniquem de forma padronizada, flexível e escalável.

Ao seguir os princípios de Cliente-Servidor, Stateless, Cacheable, Interface Uniforme e Sistema em Camadas, os desenvolvedores podem criar "garçons" (APIs) que são eficientes, confiáveis e fáceis de usar.

Para quem está começando, entender esses conceitos não é apenas um diferencial, mas um passo fundamental para se tornar um desenvolvedor proficiente no ecossistema tecnológico atual. Da próxima vez que você ouvir falar em "API RESTful", saberá que não se trata de uma tecnologia específica, mas de um elegante conjunto de princípios que fazem a internet funcionar.