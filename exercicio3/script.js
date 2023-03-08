

// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// for (let i = 0; i < maioresPaises.length; i++) {

//   console.log(`${i + 1} - ${maioresPaises[i]}`)

// }


const maioresPaises = [];

// Perguntar o nome dos países e adicionar ao array
for (let i = 0; i < 5; i++) {
  const pais = prompt(`Digite o nome do ${i+1}º país:`);
  maioresPaises.push(pais);
}

// Imprimir os países em formato de ranking
for (let i = 0; i < maioresPaises.length; i++) {
  console.log(`${i+1} - ${maioresPaises[i]}`);
}

