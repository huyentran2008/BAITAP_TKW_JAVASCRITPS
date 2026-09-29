let u = {
    Name: "Max",
    Age: 20
};

function thucHien() {
    let ketqua = "a) Name: " + u.Name + ", Age: " + u.Age;

    u.Surname = "Lee";
    ketqua += "<br>b) Thêm Surname: " + u.Surname;

    u.Age = 30;
    ketqua += "<br>c) Age sau khi thay đổi: " + u.Age;

    document.getElementById("ketqua").innerHTML = ketqua;
}

thucHien();
