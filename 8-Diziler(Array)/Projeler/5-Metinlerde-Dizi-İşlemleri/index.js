//Metin / Dizi Oluşturalım
var kelime = "";

// Kullanıcıdan bir kelime al
kelime = prompt("Kelime Giriniz");

// Girilen kelimeleri büyük harfe çevirdik
document.write(kelime.toUpperCase() + "<br/>");


// Kelimenin her bir karakterini ekrana yazdıralım
var kelimeBoyutu = kelime.length;
for(var i = 0; i < kelimeBoyutu; i++) {
    document.write(kelime[i] + "<br/>");
}


// girilen kelimeyi ters çevirerek yazalım
for(var i = kelimeBoyutu-1; i >= 0; i--) {
    document.write(kelime[i] + "<br/>");
}

