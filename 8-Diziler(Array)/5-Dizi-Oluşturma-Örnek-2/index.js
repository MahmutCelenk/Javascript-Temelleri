// Değişkenleri oluşturalım
var diziToplami = 0;
var ortalama = 0;
var dizi = new Array(5);

// Dizi Elemanlarını aldık
for(var i = 0; i < 5; i++) {
    dizi[i] = Number(prompt(i + ". Sayı "));
}


// dizi toplamını bulduk
for(var i = 0; i < 5; i++) {
    diziToplami = diziToplami + dizi[i];
}

// Dizinin ortalamasını bulduk
ortalama = diziToplami / 5;


// Ortalamayı yazdıralım
document.write("Ortalama = " + ortalama);


// ? Yöntem 2

// var dizi = [1,2,3,4,5];
// var ikiTop = 0;
// var diziToplami = 0;
// ikiTop = dizi[2] + dizi[4];

// for(i = 0; i < 5; i++) {
//     diziToplami = diziToplami + dizi[i];
// }
// document.write("Ortalama: " + diziToplami / 5);