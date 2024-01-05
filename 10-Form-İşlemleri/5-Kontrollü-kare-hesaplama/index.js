function hesapla() {
    var sayi = document.getElementById("sayi").value;
    if(sayi === "") {
        alert("Lütfen sayı giriniz!!");
    } else {
        sayi = Number(sayi);
        if(sayi <= 0) {
            alert("Pozitif sayı giriniz!!");
        } else {
            var kare = sayi * sayi;
            document.getElementById("karesi").innerHTML = kare;
        }
    }
}