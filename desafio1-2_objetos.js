//Construção e impressão de objetos
//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. 

const empresa = {
    nome: "Rocketseat",
    cor: "roxo",
    foco: "programação",
    endereco: {
        rua: "Rua Guilherme Gabala",
        numero: 260
    } 
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero} `);