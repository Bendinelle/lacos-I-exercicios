


let conta = 0

let pergunta = prompt("Deseja comer mais coxinhas? (S ou N)").toUpperCase()

while (pergunta === "S") {
  
    conta += 2.5
    pergunta = prompt("Deseja comer mais coxinhas? (S ou N)").toUpperCase()
    console.log(conta)
}

console.log(`Valor total da conta: R$${conta}`)























// function estaSatisfeito() {
//     let pessoa = prompt(`Você deseja comer mais coxinhas? 
//     "S" para sim 
//     "N" para não`).toUpperCase()
//     let soma = 0


//     while(pessoa === "S"){
//         soma += 2.50
//         console.log(soma)

//     pessoa = prompt(`Você deseja comer mais coxinhas?`).toUpperCase() 
//     }

//     console.log(`O valor total da conta é ${soma.toFixed(2)}`)
// }


// estaSatisfeito()
