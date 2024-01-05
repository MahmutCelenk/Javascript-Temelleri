var ortalama = Number(prompt("Notunuz"));

if(ortalama < 50) {
    alert("Kaldınız !!");
} else if (ortalama <= 65) {
    alert("Orta");
} else if (ortalama <= 80) {
    alert("İyi");
} else {
    alert("Pek iyi !!");
}