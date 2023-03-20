//criação de promise

const myPromise = new Promise((resolve, reject) => {
  const name = "Joao";

  if (name === "Amanda") {
    resolve("Usuário encontrado");
  } else {
    reject("Usuário não encontrado");
  }
});

myPromise
  .then((message) => {
    //console.log(message);
  })
  .catch((err) => {
    // console.log("Ocorreu um erro: " + err); //caso a resposta seja um reject - tratar o catch
  });

//Encadear then

const myPromise2 = new Promise((resolve, reject) => {
  const name = "Amanda";

  if (name === "Amanda") {
    resolve("Usuário encontrado");
  } else {
    reject("Usuário não encontrado");
  }
});

myPromise2
  .then((message) => {
    return message.toLowerCase();
  })
  .then((messageModificated) => {
    //console.log(messageModificated);
  });

// resolver várias promises com all

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1 + 2);
  }, 2000);
});
const p2 = new Promise((resolve, reject) => resolve(5 + 2));

const resolveAll = Promise.all([p1, p2]).then((data) => {
  //Vai esperar todas pra mostrar de uma vez
  //console.log(data);
});

// resolver várias promises com race (corrida)
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1 + 2);
  }, 2000);
});
const p4 = new Promise((resolve, reject) => resolve(5 + 2));

const resolveAllWithRace = Promise.race([p1, p2]).then((data) => {
  //Vai esperar todas pra mostrar de uma vez
  console.log(data);
});

//Fetch request

const userName = "amandacolacioRethink";
const url = `https://api.github.com/users/${userName}`;
fetch(url, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((response) => {
    console.log(response);
    console.log(typeof response);
    return response.json();
  })
  .then((data) => {
    console.log(`O nome do usuário é ${data.name}`);
  })
  .catch((err) => {
    console.log(`Houve algum erro: ${err}`);
  });
