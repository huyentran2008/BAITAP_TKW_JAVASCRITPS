function docSo() {
    let n = Number(prompt("Nhập số nguyên có 2 chữ số:"));

    if (!Number.isInteger(n) || n < 10 || n > 99) {
        window.alert("Vui lòng nhập số nguyên có 2 chữ số.");
        return;
    }

    let hangChuc = Math.floor(n / 10);
    let hangDonVi = n % 10;

    let chuChuc = ["", "", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    let chuDonVi = ["không", "một", "hai", "ba", "bốn", "lăm", "sáu", "bảy", "tám", "chín"];

    let ketqua = chuChuc[hangChuc] + " mươi";

    if (hangDonVi != 0) {
        ketqua += " " + chuDonVi[hangDonVi];
    }

    window.alert(ketqua);
}
