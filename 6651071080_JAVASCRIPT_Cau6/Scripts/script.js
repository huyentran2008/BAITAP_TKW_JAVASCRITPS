function giaiPhuongTrinh() {
    let a = Number(prompt("Nhập a:"));
    let b = Number(prompt("Nhập b:"));
    let c = Number(prompt("Nhập c:"));
    let ketqua = "";

    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                ketqua = "Phương trình có vô số nghiệm.";
            } else {
                ketqua = "Phương trình vô nghiệm.";
            }
        } else {
            let x = -c / b;
            ketqua = "Phương trình có nghiệm x = " + x;
        }
    } else {
        let delta = b * b - 4 * a * c;

        if (delta < 0) {
            ketqua = "Phương trình vô nghiệm.";
        } else if (delta == 0) {
            let x = -b / (2 * a);
            ketqua = "Phương trình có nghiệm kép x1 = x2 = " + x;
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            ketqua = "x1 = " + x1 + "<br>x2 = " + x2;
        }
    }

    window.alert(ketqua.replace("<br>", "\n"));
    document.getElementById("ketqua").innerHTML = ketqua;
}
