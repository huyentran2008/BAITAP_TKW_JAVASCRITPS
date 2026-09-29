function timNgayKeTiep() {
    let ngay = Number(prompt("Nhập ngày:"));
    let thang = Number(prompt("Nhập tháng:"));
    let nam = Number(prompt("Nhập năm:"));

    let ngayHienTai = new Date(nam, thang - 1, ngay);
    ngayHienTai.setDate(ngayHienTai.getDate() + 1);

    let ngayMoi = ngayHienTai.getDate();
    let thangMoi = ngayHienTai.getMonth() + 1;
    let namMoi = ngayHienTai.getFullYear();

    console.log("Ngày kế tiếp: " + ngayMoi + "/" + thangMoi + "/" + namMoi);
}
