// TODO: Yarıçapı verilen çemberin alanı ve çevresini ekrana yazdıran fonksiyonu yazdırınız

var yariCap = Number(prompt("Yarıçap:"));


function hesapla(yariCap) {
    var alan;
    var cevre;
    var PI = 3.14;

    alan = PI * yariCap * yariCap;
    cevre = 2 * PI * yariCap;

    document.write("Çemberin Alanı = " + alan + "<br/>");
    document.write("Çemberin Çevresi = " + cevre);
    
    return alan;
}
hesapla(yariCap);