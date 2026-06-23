const prompt = require("prompt-sync")({sigint : true})

let judul = prompt('Apa judul bukunya : ')
let penerbit = prompt('Siapa penerbit bukunya : ')
let jumlah = prompt('berapa jumlah bukunya : ')
let tanggalPembelian = prompt('Kapan tanggal pembeliannya : ')

console.log(`
Judul Buku : ${judul}
Penerbit : ${penerbit}
Jumlah Buku : ${jumlah}
Tanggal Pembelian : ${tanggalPembelian}`
)