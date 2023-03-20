const path = require("path");
const fn = require("./functions");

const caminho = path.join(__dirname, "..", "dados", "legendas");

const simbolos = [
  "♪",
  ",",
  "/",
  "!",
  "\r",
  ".",
  '"',
  "_",
  "-",
  "<i>",
  "</i>",
  "[",
  "]",
  ")",
  "(",
];

const mesclarConteudos = (array) => array.join(" ");
const separarLinhas = (conteudos) => conteudos.split("\n");
const separarPorPalavras = (conteudo) => conteudo.split(" ");

const agruparPalavra = (palavras) =>
  Object.values(
    palavras.reduce((acc, el) => {
      const p = el.toLowerCase();
      const qtde = acc[p] ? acc[p].qtde + 1 : 1;
      acc[p] = { palavra: p, qtde };
      return acc;
    }, {})
  );

fn.readDirectory(caminho)
  .then(fn.elementosTerminadosCom(".srt")) //pegando os arquivos que tem final str
  .then(fn.readAllFiles) //mostrar o conteúdo dos arquivos srt
  .then(mesclarConteudos) // juntar todo o texto
  .then(separarLinhas) // quebrar em linhas
  .then(fn.removerSeVazio) //filtrar as linhas para remover as linhas vazias
  .then(fn.removerSeIncluir("-->"))
  .then(fn.removerSeIncluirNumber)
  .then(fn.removerSimbolos(simbolos))
  .then(mesclarConteudos) // juntar todo o texto
  .then(separarPorPalavras)
  .then(fn.removerSeVazio)
  .then(fn.removerSeIncluirNumber)
  .then(agruparPalavra)
  .then(console.log); // só vai chamar quando todas as promises anteriores forem resolvidas
