function timSoLonNhat() {
    let a = 15;
    let b = 28;
    let c = 9;

    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    document.getElementById("ketqua").innerHTML =
        "Số lớn nhất là: " + max;
}

timSoLonNhat();
