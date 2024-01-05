var not1 = Number(prompt("Not 1"));
var not2 = Number(prompt("Not 2"));
var ortalama = (not1 + not2) / 2;

if(ortalama < 50) {
    alert("Ortalama =" + ortalama + " Kaldı");
} else {
    alert("Ortalama =" + ortalama + " Geçti");
}