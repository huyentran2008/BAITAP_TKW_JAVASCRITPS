let Student = {
    Name: "Nguyen Van An",
    NumberID: "SV001",
    Gender: "Nam"
};

function hienThi() {
    let ketqua =
        "Name: " + Student.Name + "<br>" +
        "NumberID: " + Student.NumberID + "<br>" +
        "Gender: " + Student.Gender;

    document.getElementById("ketqua").innerHTML = ketqua;
}

hienThi();
