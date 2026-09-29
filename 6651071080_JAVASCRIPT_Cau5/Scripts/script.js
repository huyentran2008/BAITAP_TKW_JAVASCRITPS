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

function kiemTraNguyenTo() {
    let n = Number(prompt("Nhập một số nguyên dương:"));

    if (!Number.isInteger(n) || n <= 0) {
        window.alert("Vui lòng nhập số nguyên dương.");
        return;
    }

    if (laSoNguyenTo(n)) {
        window.alert(n + " là số nguyên tố.");
    } else {
        window.alert(n + " không phải là số nguyên tố.");
    }
}
