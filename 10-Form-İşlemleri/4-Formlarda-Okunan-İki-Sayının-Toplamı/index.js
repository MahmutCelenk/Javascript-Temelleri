function toplam() {
    var sayi1 = Number(document.getElementById("sayi1").value);
    var sayi2 = Number(document.getElementById("sayi2").value);
    var toplam = sayi1 + sayi2;
    var ortalama = toplam / 2;

    document.getElementById("toplam").innerHTML = toplam;
    document.getElementById("ortalama").innerHTML = ortalama; 
};