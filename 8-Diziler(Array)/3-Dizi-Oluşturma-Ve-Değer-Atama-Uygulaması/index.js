// Dizi oluşturma
// var arkadaslar = ["Ahmet", "Mehmet", "Ali", "Veli"];

// Diziyi yazdır
// document.write(arkadaslar);


// Uzun iş boşuna hammalık
var arkadaslar = new Array(4);
// arkadaslar[0] = prompt("0. Eleman:");
// arkadaslar[1] = prompt("1. Eleman:");
// arkadaslar[2] = prompt("2. Eleman:");
// arkadaslar[3] = prompt("3. Eleman:");
// document.write(arkadaslar);


for(var i = 0; i < 4; i++) {
    arkadaslar[i] = prompt(i + " indisli aradaş:");
}
document.write(arkadaslar + "<br/>");

for(var i = 0; i <= 3; i++) {
    document.write(arkadaslar[i] + "<br/>");
}