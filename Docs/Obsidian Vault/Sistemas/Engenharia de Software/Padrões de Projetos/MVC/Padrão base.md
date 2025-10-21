
```
blog/
├── controllers/
│   └── postController.js
├── models/
│   └── postModel.js
├── routes/
│   └── postRoutes.js
├── views/
│   ├── index.ejs
│   ├── post.ejs
│   └── new.ejs
├── public/
│   └── css/
│       └── style.css
├── app.js
└── db.js
```


### ⚙️ Organização dos arquivos

#### `app.js`

- Configura o servidor Express
    
- Define middlewares (bodyParser, static files)
    
- Conecta ao banco via `db.js`
    
- Usa as rotas de `routes/postRoutes.js`
    

#### `db.js`

- Faz a conexão com o PostgreSQL usando `pg` ou `sequelize` (se quiser ORM leve)
    

#### `models/postModel.js`

- Define a estrutura do post (id, título, conteúdo, data)
    
- Funções para CRUD: `createPost`, `getPosts`, `getPostById`, `updatePost`, `deletePost`
    

#### `controllers/postController.js`

- Lógica de cada rota: recebe dados, chama o model, renderiza a view ou responde JSON
    
- Exemplo: `exports.createPost = async (req, res) => { ... }`
    

#### `routes/postRoutes.js`

- Define rotas: `GET /`, `GET /post/:id`, `POST /post`, `PUT /post/:id`, `DELETE /post/:id`
    
- Usa os métodos do controller
