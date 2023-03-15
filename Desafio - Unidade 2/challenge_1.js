// criar uma function somar que receba (3)(4)(5)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(sum(3)(4)(5));

//calcular(3)(7)(fn)
//a função será pra calcular os dois parametros

const sumValues = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subValues = (a, b) => a - b;
const divValues = (a, b) => a / b;

function calculate(a) {
  return function (b) {
    return function (operation) {
      return operation(a, b);
    };
  };
}

console.log(calculate(10)(5)(sumValues));
console.log(calculate(10)(5)(multiply));
console.log(calculate(10)(5)(subValues));
console.log(calculate(10)(5)(divValues));
