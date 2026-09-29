function tinhLai() {
    let tienGoc = Number(document.getElementById("tienGoc").value);
    let laiSuat = Number(document.getElementById("laiSuat").value);
    let soNam = Number(document.getElementById("soNam").value);

    let laiSuatThapPhan = laiSuat / 100;

    let tienLai = tienGoc * laiSuatThapPhan * soNam;
    let tongTien = tienGoc + tienLai;

    document.getElementById("ketqua").innerHTML =
        "Tiền lãi: " + tienLai.toLocaleString("vi-VN") + " đồng<br>" +
        "Tổng tiền sau " + soNam + " năm: " +
        tongTien.toLocaleString("vi-VN") + " đồng";
}

