var x = Number(prompt("İlk Sayı"));
var y = Number(prompt("İkinci Sayı"));

function topla(sayi1,sayi2) {
    var toplam = sayi1 + sayi2;
    return toplam;
}

document.write("Sayının Toplamı =" + topla(x,y));