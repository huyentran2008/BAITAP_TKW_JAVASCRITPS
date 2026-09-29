function daoNguocSo(n) {
    let soDao = 0;

    while (n > 0) {
        let chuSo = n % 10;
        soDao = soDao * 10 + chuSo;
        n = Math.floor(n / 10);
    }

    return soDao;
}

function thucHien() {
    let n = Number(prompt("Nhập số nguyên dương:"));
    let ketqua = daoNguocSo(n);

    document.getElementById("ketqua").innerHTML =
        "Số đảo ngược là: " + ketqua;
}

