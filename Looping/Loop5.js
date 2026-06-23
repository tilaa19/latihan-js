let total = 5;
let text = "";

for(let i = 1; i <= 4; i++) {
    total += i;
    text += i + " + ";
}

console.log(text + "5 = " + total);