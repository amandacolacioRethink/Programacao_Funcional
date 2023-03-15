//Function declaration - não retorna nada
function bomDia() {
  console.log("Bom dia!");
}
bomDia();

//Function expresion - não retorna nada
const boaTarde = function () {
  console.log("Boa tarde!");
};
boaTarde();

function somar(a, b = 0) {
  return a + b;
}
console.log(somar(3, 4));
console.log(somar(3)); // quando já tem um valor no parametro, n precisa passar ele

// Retornar uma função a partir de uma outra função

function potencia(base, exp) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const potenciaDe34 = potencia(3)(4);
console.log(potenciaDe34);
