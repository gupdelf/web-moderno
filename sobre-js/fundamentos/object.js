const camp = [45, objeto1= {nome: 'gu', idade: 20}]
console.log(camp)
console.log(camp[1])
console.log(objeto1)

/**
 * OBJETO É COM CHAVES
 * {} { CHAVES } {}
 * 
 */
console.log('// Outros Exemplos //')
const prod1 = {}
prod1.nome = 'Celular1'
prod1.preco = 2000
prod1['Desconto chav'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        seloco: 1,
        obj: {
            seloco2: 2
        }
    }
}

console.log(prod2)
console.log(prod2.obj.obj.seloco2)

let json = '{"nome": "Camisa Polo", "preço": 79.90 }'