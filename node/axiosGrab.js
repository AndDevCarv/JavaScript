const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"

const axios = require('axios')

axios.get(url).then(resposta => {
    const funcionarios = resposta.data
    
    const nomes = 
    funcionarios.filter (pessoa => pessoa.genero === 'F').map(pessoa => ({...pessoa}))
    
})