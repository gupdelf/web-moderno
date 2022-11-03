const funcs = []

for (var i = 0 ; i < 10 ; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

/**
 * Pelo fato de var não ter escopo de function
 * o JS não respeita a variável 'i' ao ser chamada
 * , mas sim ao finalizar o loop. Sendo assim quando o 
 * valor da variável já se tornou 10.
 */