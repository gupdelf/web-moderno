let num = 1;
let final = 1;

{
    console.log('Bloco 1')
    while (num < 10) {
        console.log(num);
        num += 2;
    }
    num = 2
}
{
    console.log('Bloco 2')
    while (num < 11) {
        console.log(num);
        num += 2;
    }
}