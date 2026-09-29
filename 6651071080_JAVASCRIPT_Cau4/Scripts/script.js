function inSoLe() {
    let ketqua = "";

    for (let i = 1; i < 100; i += 2) {
        if (i != 5 && i != 7 && i != 93) {
            ketqua += i + " ";
        }
    }

    document.getElementById("ketqua").innerHTML = ketqua;
}

inSoLe();
