//callback - passar uma função como parâmetro e depois ela será chamada de volta

const exec = (fn, a, b) => fn(a, b); //chamando a função que foi passada no parâmetro

const sumInTerminal = (x, y) => console.log(x + y);
const subInTerminal = (x, y) => console.log(x - y);

exec(sumInTerminal, 56, 38); //chamando uma função dentro da outra

//callback 2
