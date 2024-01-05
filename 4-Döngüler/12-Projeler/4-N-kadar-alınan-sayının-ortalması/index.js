// TODO: n kadar sayının ortalamasını bul


// ? For Döngüsü ile 
var n = Number(prompt("N:"));
var toplam = 0;
ortalama = 0;

for(var sayi = 1; sayi <= n; sayi++) {
    sayi = Number(prompt("sayı:"));
    toplam = toplam + sayi;
}
ortalama = toplam / n;
document.write("Ortalama = " + ortalama);
 
