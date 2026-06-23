for (let i = 97; i <= 101; i++) {
    let hasil = "";

    for (let j = 1; j <= 5; j++) {
        hasil += String.fromCharCode(i) + " ";
    }

    console.log(hasil);
}