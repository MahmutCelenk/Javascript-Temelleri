// Diziyi Tanımlayalım
var sayilar = new Array();


// dizinin Elamanlarının sayısını kullanıcıdan alıyoruz
var n = Number(prompt("Dizinin Eleman Sayısı:"));


// For döngüsü kullanarak dizinin elamanlarını okuyalım
for(var i = 0; i < n; i++) {
    sayilar[i] = Number(prompt(i + " indisli Dizi Elemanlı"));
};

// Diziyi ekrana yazalım
document.write(sayilar);