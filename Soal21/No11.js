const prompt = require("prompt-sync")({sigint : true})

let RPL1 = Number(prompt('Masukkan jumlah siswa X RPL 1 : '))
let RPL2 = Number(prompt('Masukkan jumlah siswa X RPL 2 : '))
let TKJ1 = Number(prompt('Masukkan jumlah siswa X TKJ 1 : '))
let TKJ2 = Number(prompt('Masukkan jumlah siswa X TKJ 2 : '))

let total = RPL1 + RPL2 + TKJ1 + TKJ2

console.log(`
X RPL1 : ${RPL1} siswa
X RPL2 : ${RPL2} siswa
X TKJ1 : ${TKJ1} siswa
X TKJ2 : ${TKJ2} siswa
Total semuanya adalah : ${total} siswa`)