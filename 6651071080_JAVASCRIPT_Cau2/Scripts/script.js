function kiemTraNamNhuan() {
    let nam = Number(document.getElementById("nam").value);
    let ketqua;

    if (nam % 400 == 0 || (nam % 4 == 0 && nam % 100 != 0)) {
        ketqua = nam + " là năm nhuận.";
    } else {
        ketqua = nam + " không phải là năm nhuận.";
    }

    document.getElementById("ketqua").innerHTML = ketqua;
}

