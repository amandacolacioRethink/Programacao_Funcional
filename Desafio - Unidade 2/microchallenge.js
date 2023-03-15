const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Imprssora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

// array com apenas os nomes
// const productName = (item) => item.nome;
console.log(carrinho.map((item) => item.nome));

//array multiplicando o preço e quantidade - numeros
const numbers = (numbers) => numbers.qtde * numbers.preco;
console.log(carrinho.map(numbers));

//COM FILTER
const greaterThanZero = carrinho.filter((item) => item.qtde > 1);
console.log(greaterThanZero);

//COM REDUCE
const getTotal = carrinho
  .map((item) => item.qtde * item.preco)
  .reduce((acc, el) => acc + el, 0);
console.log(getTotal);
