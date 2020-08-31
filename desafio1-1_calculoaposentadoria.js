//Cálculo de aposentadoria
//Programa para calcular a aposentadoria de uma pessoa.
//- O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

const nome = "Bruno";
const sexo = "M";
const idade = 24;
const contribuicao = 2.5;

if (sexo == "M" && contribuicao>=35){
    console.log(`${nome}, você pode se aposentar!`);
}
else if(sexo == "F" && contribuicao>=30){
    console.log(`${nome}, você pode se aposentar!`);
}
else if((idade + contribuicao) >= 85 && sexo == "F"){
    console.log(`${nome}, você pode se aposentar!`);
}
else if((idade + contribuicao) >= 95 && sexo == "M"){
    console.log(`${nome}, você pode se aposentar!`);
}
else{
    console.log(`${nome}, você ainda não pode se aposentar!`);
}