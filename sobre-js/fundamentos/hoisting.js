/** O JS detecta que precisa pelo menos declarar a variável VAR
 * sem declarar seu valor, deixando 'undefined'
 */

// var a
console.log('a =', a)
var a = 2
console.log('a =', a)

/** A mesma coisa acontece ao chamar uma function 
 * 
*/

function teste() {
    console.log('b =', b)
    var b = 2
    console.log('b =', b) 
}

teste()