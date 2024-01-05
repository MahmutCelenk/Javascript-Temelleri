var an = new Date();

var gun = an.getDate();
var ay = an.getMonth();
var yil = an.getFullYear();
var saat = an.getHours();
var dakika = an.getMinutes();


// Sayfaya tarih saaat bilgisi yazdırıyoruz
document.write("Tarih: " + gun + "/" + (ay + 1) + "/" + yil +  "<br/>");
document.write("Saat: " + saat + ":" + dakika);