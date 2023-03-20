// Funções mais genericas

const fs = require("fs");
const path = require("path");

const readDirectory = (caminho) => {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (err) {
      reject(err);
    }
  });
};

const readFile = (
  caminho // vai obter apenas um arquivo, vai retornar uma promisse e quando o arquivo for lido que vai chamar o metodo resolve.
) =>
  new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(caminho, { encoding: "utf8" });
      resolve(content.toString());
    } catch (e) {
      reject(e);
    }
  });

const readAllFiles = (caminho) =>
  Promise.all(caminho.map((caminho) => readFile(caminho)));

const elementosTerminadosCom = (padrao) => (array) =>
  array.filter((el) => el.endsWith(padrao));

const removerSeVazio = (array) => array.filter((el) => el.trim());

const removerSeIncluir = (padraoTextual, array) => {
  return (array) => array.filter((el) => !el.includes(padraoTextual));
};

const removerSeIncluirNumber = (array) =>
  array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });

const removerSimbolos = (simbolos) => (array) =>
  array.map((el) => {
    let textSemSimbolo = el;
    simbolos.forEach((simbolo) => {
      textSemSimbolo = textSemSimbolo.split(simbolo).join("");
    });
    return textSemSimbolo;
  });

module.exports = {
  readDirectory,
  elementosTerminadosCom,
  readFile,
  readAllFiles,
  removerSeVazio,
  removerSeIncluir,
  removerSeIncluirNumber,
  removerSimbolos,
};
