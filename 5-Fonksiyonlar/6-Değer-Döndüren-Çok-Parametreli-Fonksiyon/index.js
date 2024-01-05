// function topla(sayi1, sayi2) {
    // ! Bir diğer yöntem
    // var toplam = sayi1 + sayi2;
    // return toplam;
//     return sayi1 + sayi2;
// }
// document.write("Sayıların Toplamı = " + topla(2,3))


// Kullanıcıdan sayı almak istersek 
function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}
var girilecekSayi1 = Number(prompt("Sayi1"))
var girilecekSayi2 = Number(prompt("Sayi2"))

document.write("Toplam = " + topla(girilecekSayi1,girilecekSayi2));