const sum = (numeros) => {
  let total = 0;
  for (let n of numeros) {
    // vai passar por cada um dos numeros
    total += n;
  }
  return total;
};

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// const potencia = (base) => (exp) => {
//   return Math.pow(base, exp);
// };

const potencia = (base) => (exp) => Math.pow(base, exp);

console.log(potencia(2)(10));
