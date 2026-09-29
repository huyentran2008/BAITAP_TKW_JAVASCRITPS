function vietHoa() {
    let chuoi = document.getElementById("chuoi").value;

    let mang = chuoi.toLowerCase().split(" ");

    for (let i = 0; i < mang.length; i++) {
        if (mang[i] != "") {
            mang[i] = mang[i][0].toUpperCase() + mang[i].substring(1);
        }
    }

    let ketqua = mang.join(" ");
    document.getElementById("ketqua").innerHTML = ketqua;
}

