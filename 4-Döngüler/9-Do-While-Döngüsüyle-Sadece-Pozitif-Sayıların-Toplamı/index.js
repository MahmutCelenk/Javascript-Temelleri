// TODO: Sadece Pozitif sayıların toplamı


var sayi;
var kare;

do{
    sayi = Number(prompt("Pozitif Sayı Giriniz:"));
} while( sayi <= 0)
kare = sayi * sayi;
document.write("Sayı: " + sayi + " Sayının Karesi: " + kare);