function tinhGiaiThua(n) {
    let giaiThua = 1;

    for (let i = 1; i <= n; i++) {
        giaiThua *= i;
    }

    return giaiThua;
}

function thucHien() {
    let n = Number(prompt("Nhập số nguyên dương n:"));

    if (!Number.isInteger(n) || n < 0) {
        window.alert("Vui lòng nhập số nguyên không âm.");
        return;
    }

    let ketqua = tinhGiaiThua(n);

    document.getElementById("ketqua").innerHTML =
        n + "! = " + ketqua;
}

