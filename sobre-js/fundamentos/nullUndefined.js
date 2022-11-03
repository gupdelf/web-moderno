let valor // não inicializada

console.log(valor) // undefined
// console.log(valor2) // variavel não declarada ERRO

valor = null // declarada, incializada porém com AUSÊNCIA DE VALOR
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
// console.log(produto.preco.a) Erro! "a" não foi declarado

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco utilizar o delete para remover algum atributo do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)