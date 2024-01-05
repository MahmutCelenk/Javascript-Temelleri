var sayi = Number(prompt("Pozitif Bir Sayı Giriniz:"));
var kare;

if(sayi < 0) {
    alert("Sayı Negatiftir");
} else {
    kare = sayi * sayi;
    alert("Sayı: " + sayi + " Kare = " + kare);
}
