var vize = Number(prompt("Vize Notu"));
var final = Number(prompt("Final Notu"));
var ortalama = (vize+final) / 2;

if(ortalama < 50) {
    document.write("Kaldınız");
} else {
    document.write("Geçtiniz");
}
