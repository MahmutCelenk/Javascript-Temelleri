var yariCap = Number(prompt("Yarıçap:"));
var alan;
var cevre;
var Pİ = 3.14

if(yariCap <= 0) {
    alert("Yarıçap Pozirif olmalıdır !!!");
} else {
    alan = Pİ * yariCap * yariCap;
    cevre = 2 * Pİ * yariCap;
    alert("Alan =" + alan + " Çevre = " + cevre);
}