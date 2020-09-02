//Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine", 
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
];

function checaSeUsuarioUsaCSS(usuarios){
    for(let i=0; i< usuarios.length; i++){
        if(usuarios[i].tecnologias == "CSS"){
            console.log("true");
            return true;
            
        }
        else{
            return false;
        }
    }
}

/*
const usuario = "Carlos";
const CSSer = checaSeUsuarioUsaCSS(usuario);

console.log(CSSer);
*/
