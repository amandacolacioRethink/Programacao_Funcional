const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Imprssora", qtde: 0, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

// Um vai ser filter, outro map e outro reduce

// 1. Selecionar apenas os elementos que fragil = true
const frageis = carrinho.filter((item) => item.fragil === true);
//console.log(frageis);

// 2. Selecionar a qtde e preço --> total de cada elemento
const total = carrinho.map((item) => item.qtde * item.preco);
//console.log(total);

// 3. Gerar a médias dos valores --> média de todos os elementos
//não consegui

//Resposta do curso

const media = carrinho
  .filter((item) => item.fragil)
  .map((item) => item.qtde * item.preco)
  .reduce(
    (acc, el) => {
      const novaQtde = acc.qtde + 1;
      const novoTotal = acc.total + el;
      console.log(acc, el);
      return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde,
      };
    },
    { qtde: 0, total: 0, media: 0 }
  );

//console.log(media);
