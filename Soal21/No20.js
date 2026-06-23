const prompt = require("prompt-sync")({sigint : true})

let huruf = (prompt('Masukkan satu huruf bos : '))
huruf = huruf.toLowerCase();

if (huruf >= 'a' && huruf <= 'z') {

    if (
        huruf === 'a' ||
        huruf === 'i' ||
        huruf === 'u' ||
        huruf === 'e' ||
        huruf === 'o'
    ) {
        console.log("Huruf vokal");
    } else {
        console.log("Huruf konsonan");
    }

} else {
    console.log("Bukan berupa huruf bos");
}