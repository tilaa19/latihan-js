const prompt = require("prompt-sync")({ sigint: true });

let nama = prompt("Masukkan nama karyawan bos: ");
let golongan = prompt("Masukkan golongan (A/B/C/D): ").toUpperCase();
let jamKerja = Number(prompt("Masukkan jumlah jam kerjanya bos: "));

let upahPerJam;

if (golongan == "A") {
    upahPerJam = 4000;
} else if (golongan == "B") {
    upahPerJam = 5000;
} else if (golongan == "C") {
    upahPerJam = 6000;
} else if (golongan == "D") {
    upahPerJam = 7500;
} else {
    console.log("Golongan tidak valid bos!");
}