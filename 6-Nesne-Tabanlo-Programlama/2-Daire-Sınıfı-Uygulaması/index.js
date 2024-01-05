// Sınıfı oluştur
class Daire{
    constructor(yariCap) {
        this.yariCap = yariCap;
    }

    alan(){
        return 3.14 * this.yariCap * this.yariCap;
    }

    cevre() {
        return 2 * 3.14 * this.yariCap;
    }
}

// Nesne oluştur
var r1 = Number(prompt("r1:"));
var d1 = new Daire(r1);
document.write("Alan1 =" + d1.alan() + " Çevre1 =" + d1.cevre() + "<br/>");

// Nesne oluştur
var r2 = Number(prompt("r2"));
var d2 = new Daire(r2);
document.write("Alan2 =" + d2.alan() + " Çevre2 =" + d2.cevre());