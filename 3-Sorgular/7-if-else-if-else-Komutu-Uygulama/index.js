var yas = Number(prompt("Yaşınız"));


if(yas < 2) {
    alert("Bebek");
} else if (yas <= 12) {
    alert("Çocuk");
} else if(yas <= 40) {
    alert("Genç");
} else if(yas <= 60) {
    alert("Yetişkin")
} else {
    alert("Yaşlı");
}