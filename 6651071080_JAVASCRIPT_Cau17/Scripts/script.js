function doiNhiPhanSangThapPhan(chuoi) {
    let ketqua = 0;
    let mu = 0;

    for (let i = chuoi.length - 1; i >= 0; i--) {
        let chuSo = Number(chuoi[i]);

        if (chuSo != 0 && chuSo != 1) {
            return -1;
        }

        ketqua += chuSo * Math.pow(2, mu);
        mu++;
    }

    return ketqua;
}

function thucHien() {
    let nhiPhan = prompt("Nhập số nhị phân:");
    let ketqua = doiNhiPhanSangThapPhan(nhiPhan);

    if (ketqua == -1) {
        document.getElementById("ketqua").innerHTML =
            "Số bạn nhập không hợp lệ.";
    } else {
        document.getElementById("ketqua").innerHTML =
            nhiPhan + "₂ = " + ketqua + "₁₀";
    }
}
