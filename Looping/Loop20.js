const prompt = require("prompt-sync")();

let angka = Number(prompt("Masukkan angka:")); 
let awal = "*\t";

for (let i = 1; i <= angka; i++) {
    awal += i + "\t";
}

console.log(awal);

for (let i = 1; i <= angka; i++) {
    let bawah = i + "\t";

    for (let j = 1; j <= angka; j++) {
        bawah += (i * j) + "\t";
    }
    console.log(bawah);
}n