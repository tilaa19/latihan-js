const prompt = require("prompt-sync")({sigint : true})

let nilai = Number(prompt('Masukkan nilai anda bos: '))

if(nilai >= 100){
    console.log('Masa nilai anda segitu sih?')
}else if(nilai >= 90){
    console.log('Grade anda adalah A')
}else if(nilai >= 80){
    console.log('Grade anda adalah B')
}else if(nilai >= 70){
    console.log('Grade anda adalah C')
}else if(nilai >= 60){
    console.log('Grade anda adalah D')
}else if(nilai >= 0){
    console.log('Grade anda adalah E')
}else {
    console.log('Serius nilai anda segitu bos?')
}