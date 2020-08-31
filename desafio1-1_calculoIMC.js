//Cálculo de IMC
//Programa para calcular o IMC e nível de obesidade de uma pessoa.
//peso / (altura * altura)

const nome = "Bruno";
const peso = 62;
const altura = 1.67;

const imc = peso / (altura*altura);

if (imc >= 30){
    console.log(`${nome}, você está acima do peso`);
}
else{
    console.log(`${nome}, você não está acima do peso`);
}