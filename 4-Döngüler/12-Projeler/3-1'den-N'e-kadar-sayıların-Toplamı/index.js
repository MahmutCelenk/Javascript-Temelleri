// TODO: 1den n'e kadar olan sayıların toplamını  yazdır


// ? For Döngüsü ile 
// var n = Number(prompt("N:"));
// var toplam = 0;

// for(var sayi = 1; sayi <= n; sayi++) {
//     toplam = toplam + sayi;
// }
// document.write("Toplam = " + toplam + "<br/>");



// ? While Döngüsü
var n = Number(prompt("N:"));
var sayi = 1;
var toplam = 0;

while(sayi <= n) {
    toplam = toplam + sayi;
    sayi++;
}
document.write("Toplam = " + toplam + "<br/>");
