//Vetores e objetos
//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const usuario = {
    nome: 'Carlos',
    idade: '32',
    tecnologias: [
    {
        nome: 'C++',
        especialidade: 'desktop'
    },
    {
        nome: 'Python',
        especialidade: 'Data Science'
    },
    {
        nome: 'JavaScript',
        especialidade: 'web/mobile'
    }
]
};


console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologias[0].nome} com especialidade em ${usuario.tecnologias[0].especialidade}`);