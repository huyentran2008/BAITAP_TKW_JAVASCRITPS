let HinhTru = {
    radius: 10,
    height: 15
};

function thucHien() {
    let r = HinhTru.radius;
    let h = HinhTru.height;

    let theTich = Math.PI * r * r * h;

    HinhTru.height = 30;

    let dienTichToanPhan =
        2 * Math.PI * r * r +
        2 * Math.PI * r * HinhTru.height;

    document.getElementById("ketqua").innerHTML =
        "Thể tích ban đầu: " + theTich.toFixed(2) +
        "<br>Chiều cao mới: " + HinhTru.height +
        "<br>Diện tích toàn phần: " + dienTichToanPhan.toFixed(2);
}

thucHien();
