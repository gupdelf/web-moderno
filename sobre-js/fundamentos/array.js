/**
 * ARRAY É COM COLCHETES
 * [] [  COLCHETES  ] []
 * 
 * USAR ":" PARA DEFINIR VALORES
 * EXEMPLO: const camp = [45, objeto1 = {nome: 'gu', idade: 20}]
 */

const valores = [3, 5, 8, 9, 10]
console.log(valores[3], valores[5])

valores[5] = 15
valores[7] = 20
valores[25] = 100
console.log(valores)
console.log(valores.length)

valores.push({id: 8}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)