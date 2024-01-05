function kontrol() {
    //  Ders notunu alalım
    var dersNotu = document.getElementById("ders-notu").value;
    // Önceki hata iletisini silelim
    var hataIletisi = document.getElementById("hataIletisi");
    hataIletisi.innerHTML = "";

    // Hata denetimi yapalım
    try{
        if(dersNotu == "") {
            throw "Ders notu girilmemiş!";
        } if(isNaN(dersNotu)) {
            throw "Sayısal değer girilmemiş!";
        }
        dersNotu = Number(dersNotu);
        if(dersNotu < 0 || dersNotu > 10) {
            throw "Ders notu 0 ila 10 arasında olmalıdır!!";
        } 
    }
    // Hatayı yakala
    catch(err) {
        hataIletisi.innerHTML = "Hata:" + err;
    }

    // Hata olsada olmasada aşağıdaki kodlar çalışsın
    // girilen değerler yazdırılsın
    finally {
        var girilenDeger = document.getElementById("girilenDeger");
        girilenDeger.innerHTML ="Girilen Değer: " + dersNotu;
    }
}

