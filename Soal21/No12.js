const prompt = require("prompt-sync")({sigint : true})

let r = Number(prompt('Masukkan jari-jarinya : '))
let v = 3.14

let V = 1.33 * v * r * r * r;
let L = 4 * v * r * r;  

console.log(
`
Volume bola adalah\t\t : ${V.toFixed(2)} cm3
Luas permukaan bola adalah\t : ${L.toFixed(2)} cm2`)