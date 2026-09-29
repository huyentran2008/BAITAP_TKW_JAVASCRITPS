function laSoNguyenTo(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

function thucHien() {
    let n = Number(prompt("Nhập số nguyên dương n:"));
    let ketqua = "";

    for (let i = 2; i < n; i++) {
        if (laSoNguyenTo(i)) {
            ketqua += i + " ";
        }
    }

    document.getElementById("ketqua").innerHTML =
        "Các số nguyên tố nhỏ hơn " + n + ": " + ketqua;
}

