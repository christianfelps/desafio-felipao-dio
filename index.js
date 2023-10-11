// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

let nomeDoSeuHeroi = "christinho do poder"
let expHeroi = 9564
let rank

if (expHeroi < 0) {
console.log( "ferro")



}else if (expHeroi <= 1000){
    rank = "Ferro"

console.log("Ferro") 
}else if (expHeroi <=5000 ) {
    rank = "Prata"

console.log("Prata")
}else if (expHeroi <= 7000 ){
    rank = "Ouro"
~console.log("Ouro")
}
else if (expHeroi <= 8000){
    rank = "Platina"
    console.log("Platina")
}else if(expHeroi <= 9000){
    rank = " Ascendente"
    console.log("Ascendente")
}else if (expHeroi <=10000){
    rank = "Imortal"
    console.log("Imortal")
}else if (expHeroi === 10001){
    rank = "Radiante"
    console.log("Radiante")
}
console.log( "O Herói de nome " + nomeDoSeuHeroi + " esta no nivel "+ rank )