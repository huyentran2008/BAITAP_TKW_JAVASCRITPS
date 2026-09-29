function thucHien() {
    let ngay = Number(prompt("Nhập ngày:"));
    let thang = Number(prompt("Nhập tháng:"));
    let nam = Number(prompt("Nhập năm:"));

    let date = new Date(nam, thang - 1, ngay);

    let thu = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy"
    ];

    let ketqua =
        ngay + "/" + thang + "/" + nam +
        " là " + thu[date.getDay()];

    document.getElementById("ketqua").innerHTML = ketqua;
}

