// par nome/valor
// ou variavel/valor

const saudacao = 'Contexto léxico de escopo global' // contexto léxico 1

function exec() {
    const saudacao = 'Contexto léxico de escopo de bloco' // contexto léxico 2
    return saudacao
}
console.log(saudacao)
console.log(exec())

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Brasil',
        numero: 123
    }
}
console.log(cliente)