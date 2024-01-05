function odaklan() {
    document.getElementById("sayi").style.backgroundColor = "yellow";
    document.getElementById("sayi").focus();
}

function hesapla() {
    var sayi = document.getElementById("sayi").value;
    if(sayi === "") {
        alert("Lütfen sayı giriniz!!");
        document.getElementById("sayi").style.backgroundColor = "red";
        document.getElementById("sayi").focus();
    } else {
        sayi = Number(sayi);
        if(sayi <= 0) {
            alert("Pozitif sayı giriniz!!");
            document.getElementById("sayi").style.backgroundColor = "red";
            document.getElementById("sayi").focus();
        } else {
            var kare = sayi * sayi;
            document.getElementById("karesi").innerHTML = kare;
            document.getElementById("sayi").style.backgroundColor = "yellow";
            document.getElementById("sayi").focus();
        }
    }
}