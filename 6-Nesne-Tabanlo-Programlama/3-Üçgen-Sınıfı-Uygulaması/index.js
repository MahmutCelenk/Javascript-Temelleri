// Sınıf Tanımlama
class Ucgen {   
    static genislik = 0;
    static yukseklik = 0;

    alan() {
        return (this.genislik * this.yukseklik) / 2;
    }
}

// Nesne oluşturalım
var u1 = new Ucgen();
u1.genislik = 1;
u1.yukseklik = 2;
document.write("u1 alan = " + u1.alan() + "<br/>");

// nesne oluştur
var u2 = new Ucgen();
u2.genislik = Number(prompt("u2 genişlik"));
u2.yukseklik = Number(prompt("u2 Yükseklik"));
document.write("u2 alan = " + u2.alan());