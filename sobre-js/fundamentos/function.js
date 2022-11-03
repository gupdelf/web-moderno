// Function sem retorno
function imprimirSoma(a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) // o number b recebeu "undefined"
imprimirSoma(2,3,4,68,9,9,3) // vai ignorar os demais valores
imprimirSoma() // os 2 recebem "undefined"

// Function com retorno
function soma(a, b = 1){
    return a + b
}

soma(2,3)
console.log(soma(2,3))
console.log(soma(2))
console.log(imprimirSoma(2,3))