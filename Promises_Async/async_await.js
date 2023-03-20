const sayHello = () => {
  //tem que usar promises pra acontecer da maneira correta

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello");
      resolve();
    }, 3000);
  });
};

async function execute() {
  console.log("Amanda,");

  await sayHello(); // para esperar e respeitar a ordem

  console.log("Tchau");
}
execute();
