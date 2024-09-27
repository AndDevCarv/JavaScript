const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"

const axios = require('axios')
const { filter } = require('lodash')

axios.get(url).then(resposta => {
    const funcionarios = resposta.data
    const funcionariosChing = funcionarios.filter(pessoa => pessoa.pais === 'China')
    const molieres = funcionariosChing.filter(pessoa => pessoa.genero === 'F')

    const maiorSalario = molieres.reduce((acumulador, pessoaAtual)=> {
        return acumulador.salario < pessoaAtual.salario ? acumulador : pessoaAtual
    })

    console.log(maiorSalario);
    
    
})