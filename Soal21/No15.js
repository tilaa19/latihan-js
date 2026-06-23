const prompt = require("prompt-sync")({sigint : true})

const password = 78821;
let angka = Number(prompt('masukin pw nya bos : '))

if(angka == password){
    console.log('You are authenticated')
}else{
    console.log('You have no acces')
}