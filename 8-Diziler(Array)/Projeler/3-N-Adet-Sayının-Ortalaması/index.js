// Diziyi Oluşturalım
var sayilar = new Array();


// Okunacak Eleman Sayısı (N);
var n = Number(prompt("Dizi Eleman Sayısı:"));


// tek tek dizi elemanlarını bulalım 
for(var i = 0; i < n; i++) {
    sayilar[i] = Number(prompt(i + " İndisli Eleman"));
}

// Dizi Elemanlarının Toplamını bulalım
var toplam = 0;
var ortalama = 0;

for(var i = 0; i < n; i++) {
    toplam = toplam + sayilar[i];
}

// Ortalamayı bulalım
ortalama = toplam / n;


// Ekrana Yazdırıalım
document.write("Ortalma = " + ortalama);