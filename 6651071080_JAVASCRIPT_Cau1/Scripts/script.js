function tinhDienTich() {
    // Khai báo 3 cạnh
    let a = 5;
    let b = 6;
    let c = 7;

    // Tính nửa chu vi
    let p = (a + b + c) / 2;

    // Công thức Heron
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    // 1. Xuất ra Tab Console
    console.log(S);

    // 2. Xuất ra hộp thoại trình duyệt
    window.alert("The area of the triangle is: " + S.toFixed(2));

    // 3. Xuất ra giao diện trang web
    document.getElementById("ketqua").innerHTML =
        "The area of the triangle is: " + S.toFixed(2);
}

// Tự động chạy khi mở trang
tinhDienTich();
