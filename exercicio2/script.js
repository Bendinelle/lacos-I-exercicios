
console.log(`Bem vindo ao TABUTECH, sua tabuada inteligente !`)
  console.log('\n')

let numRecebido = Number(prompt("A partir de qual número quer iniciar sua tabuada?"))

for (let j = numRecebido; j <= 10; j++) {
    console.log(`Tabuada de ${j}:`)

  for (let i = 1; i <= 10; i++) {
    console.log(`${j} x ${i} = ${j * i}`)
  }

  console.log('\n')

}

console.log(`Espero ter ajudado, VOLTE SEMPRE !`)