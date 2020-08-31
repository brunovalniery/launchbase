

//const nome3 = `Thiago e ${nome}` 
const aluno1 = 'Bruno' //string
const notaAluno1 = 9.8

const aluno2 = 'Breno'
const notaAluno2 = 10

//console.log(typeof aluno1)
//console.log(`${aluno1} e Breno`)

const media = (notaAluno1 + notaAluno2)/2

console.log(media)

if(media > 5){
    console.log(`A média foi de ${media}. Parabéns!`)
} else {
    console.log('A média foi menor do que 5')
}