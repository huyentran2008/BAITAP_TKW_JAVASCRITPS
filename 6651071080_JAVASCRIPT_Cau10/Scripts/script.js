function tinhTong() {
    let n = Number(prompt("Nhập số nguyên dương n:"));

    if (!Number.isInteger(n) || n <= 0) {
        window.alert("Vui lòng nhập số nguyên dương.");
        return;
    }

    let tong = 0;
    let x = n;

    while (x >= 1) {
        tong += x;
        x = Math.floor(x / 2);
    }

    window.alert("Tổng = " + tong);
    document.getElementById("ketqua").innerHTML = "Tổng = " + tong;
}
