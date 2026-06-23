const prompt = require("prompt-sync")({sigint : true})

let angka = Math.floor(Math.random() * 200) + 1;

if(angka >= 100){
    console.log('Angkanya : '+ angka)
    console.log('Nilai kamu sempurna')
}else {
    console.log('Angkanya : '+ angka)
    console.log('Nilai kamu tidak sempurna')
}