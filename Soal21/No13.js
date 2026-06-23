const prompt = require("prompt-sync")({sigint : true})

let makanan = prompt('Beli makanan apa bos?\t : ')
let harga = Number(prompt('Masukin harga nya bos : '))
let pajak = (10 / 100)* harga;
let fee = (5 / 100)* harga;
let total = harga + pajak + fee;

console.log(`
Makanan yang dipesan\t : ${makanan}
Harganya adalah\t\t : Rp. ${harga}
Pajaknya adalah\t\t : Rp. ${pajak}
Fee nya adalah\t\t : Rp. ${fee}
Total harganya adalah\t : Rp. ${total}`
)