

**Configuração inicial**

Resgistra o seu nome e e-mail 
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```
Registrar nome e e-mail no Git serve pra **identificar quem fez cada alteração** no projeto. Toda vez que você faz um commit, o Git salva essas informações como parte do histórico.

**Criar e iniciar um repositório**

```bash
git init
```

**Ou**

**Clona um repositório remoto**
```bash
git clone https://github.com/usuario/repositorio.git
```


**Ver status do arquivo atual**
```bash
git status
```
Mostra os arquivos modificados, adicionados ou não rastreados

```bash
git log
```
Exibe o histórico de commits com autor, data e mensagem.


**Adiciona os arquivos no stage**
```bash
git add nome-do-arquivo
git add .          # adiciona tudo
```
Prepara os arquivos para serem comitados, os arquivos que ficarem de fora não vão para o repositório

**Commitar modificações**
```bash
git commit -m "Mensagem do commit"
```
Salva as alterações no histórico do Git com uma mensagem descritiva


**Atualizar repositório local**
```bash
git pull
```
Baixa e mescla alterações do repositório remoto para o seu local

**Enviar atualizações para o repositório remoto**
```bash
git push
```
Envia seus commits para o repositório remoto (como GitHub)