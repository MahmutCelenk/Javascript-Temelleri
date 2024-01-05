// TODO:Yükseklik ve taban uzuunluğu verilen uçgenin alanını ekrana yazdıran fonksiyonu yazınız

var taban = Number(prompt("Taban"));
var yukseklik = Number(prompt("Yükseklik"));

function alan(x,y) {
   var toplam = (x * y) / 2;
   return toplam;
}

document.write(alan(taban,yukseklik));