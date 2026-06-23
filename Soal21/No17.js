const prompt = require("prompt-sync")({sigint : true})

let barang = prompt('Barang apa yang bos beli?\t : ')
let total = Number(prompt('Harga barang nya berapa bos?\t : '))
let diskon = ((7.5 / 100)* total);
let totalBayar = total - diskon 

if(total >= 200000){
    console.log('Anda mendapatkan diskon sebesar 7.5%')
    console.log('Harga awal\t\t : '+ total)
    console.log('Harga yang harus dibayar : '+ totalBayar)
}else{
    console.log('Sayang sekali anda tidak mendapatkan diskon')
    console.log('Harganya yang harus dibayar : '+ total)
}