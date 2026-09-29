function tinhLuyThua(b, n) {
    let ketqua = 1;

    for (let i = 1; i <= n; i++) {
        ketqua *= b;
    }

    return ketqua;
}

function thucHien() {
    let b = Number(prompt("Nhập b:"));
    let n = Number(prompt("Nhập n:"));

    if (!Number.isInteger(b) || !Number.isInteger(n) || b <= 0 || n <= 0) {
        window.alert("b và n phải là số nguyên dương.");
        return;
    }

    let ketqua = tinhLuyThua(b, n);

    document.getElementById("ketqua").innerHTML =
        b + "^" + n + " = " + ketqua;
}

