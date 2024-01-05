// TODO: Dikdörtgenin çevresini ve alanını hesaplayan classı yazınız.

class Dikdortgen {
    static genislik = 0;
    static yukseklik = 0;

    cevre() {
        return (this.genislik + this.yukseklik) * 2;
    }


    alan() {
        return this.genislik * this.yukseklik;
    }
}

var sonuc = new Dikdortgen();
sonuc.genislik = Number(prompt("Genişlik"));
sonuc.yukseklik = Number(prompt("Yükseklik:"));
document.write("Çevresi = " + sonuc.cevre() + " Alanı = " + sonuc.alan());