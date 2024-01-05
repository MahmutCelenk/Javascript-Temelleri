// TODO: sıfırdan n'e kadarki çift sayıların toplamı

var toplam = 0;
var n = Number(prompt("N:"));

for(var sayac = 0; sayac <= n; sayac = sayac + 2) {
    toplam = toplam + sayac;
};
document.write("Toplam: " + toplam);
