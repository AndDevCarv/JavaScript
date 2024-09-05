const escola = [
    {nome: 'Turma1',
        alunos: [
            {
                nome: 'Andre',
                nota: 10
            },
            {
                nome: 'Joao',
                nota: 8
            }
        ]

    },
    {nome: 'Turma2',
        alunos: [
            {
                nome: 'Janaina',
                nota: 9.5
            },
            {
                nome: 'jorge',
                nota: 4
            }
        ]

    }
]



const getNota = a => a.nota
const getAluno = a => a.alunos.map(getNota)

const notas1 = escola.map(getAluno)
console.log(notas1);

