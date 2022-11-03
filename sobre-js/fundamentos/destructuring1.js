let pessoa = {
    nome: "Gu",
    idade: 20,
    endereco: {
        Av: "Brasil",
        numero: 1720
    }
};

console.log("pessoa: ", pessoa);
const {endereco} = pessoa
const { nome, idade, endereco: { Av, numero } }= pessoa;


console.log("pessoa: ", pessoa);
console.log("nome, idade, Av, numero: ",nome, idade, Av, numero);
console.log("endereco: ",endereco)