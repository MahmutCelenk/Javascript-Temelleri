// Yarıçapı  alıyoruz
var yariCap = Number(prompt("Yarıçap:"));


// Alan Ve Çevre Hesaplıyoruz
const Pİ = 3.14;
var alan = Pİ * yariCap * yariCap;
var cevre = 2 * Pİ * yariCap;

// Ekrana yazdırıyoruz
document.write("Alan= " + alan + " Çevre= " + cevre);