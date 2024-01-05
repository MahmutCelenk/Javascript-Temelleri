// TODO: iki vize ortalamasının %40'ı ile final notunun %60'ı 50'den küçükse "kaldı", aksi taktirde "geçti" yazan programı yazınız

var vize1 = Number(prompt("1. vize notunuzu giriniz"));
var vize2 = Number(prompt("2. vize notunuzu giriniz"));
var final = Number(prompt("Final Notunuzu Giriniz"));

vizeOrtalama = (vize1 + vize2) / 2;

var genelNot = vizeOrtalama * 0.4 + final * 0.6;

if(genelNot < 50) {
    alert("Kaldınız. Not= " + genelNot);
} else {
    alert("Geçtiniz. Not = " + genelNot);
}