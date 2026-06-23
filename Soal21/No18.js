const prompt = require("prompt-sync")({sigint : true})

let angka = Number(prompt('Masukkan angka bilangan bulat bos : '))

if(angka % 7 === 0){
    console.log('Mantep bos karena angka '+angka+' adalah kelipatan 7, bos beruntung')
}else{
    console.log('Aduh bos belum beruntung')
}