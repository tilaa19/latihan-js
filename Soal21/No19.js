const prompt = require("prompt-sync")({sigint : true})

let x = Number(prompt('Masukkan nilai x\t : '))
let y = Number(prompt('Masukkan nilai y\t : '))
let z = Number(prompt('Masukkan nilai z\t : '))

let terbesar = Math.max(x,y,z);
let terkecil = Math.min(x,y,z);

console.log(`
Nilai x adalah : ${x}
Nilai y adalah : ${y}
Nilai z adalah : ${z}

Nilai terbesar : ${terbesar}
Nilai terkecil : ${terkecil}`)