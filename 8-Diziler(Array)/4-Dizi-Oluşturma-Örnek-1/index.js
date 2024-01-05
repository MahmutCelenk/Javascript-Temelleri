var sayilar = new Array(5);
for(var i = 0; i < 6; i++) {
    sayilar[i] = Number(prompt(i + " Sayı:"));
}

for(var i = 0; i < 6; i++) {
    document.write(i + ". Eleman " + sayilar[i] + "<br/>");
}


// İlkel yöntemle dizi oluşturma
// sayilar[0] = 3
// sayilar[1] = 3
// sayilar[2] = 3
// sayilar[3] = 3
// sayilar[4] = 3
// sayilar[5] = 4

// document.write(sayilar[0] + "<br/>")
// document.write(sayilar[1] + "<br/>")
// document.write(sayilar[2] + "<br/>")
// document.write(sayilar[3] + "<br/>")
// document.write(sayilar[4] + "<br/>")
// document.write(sayilar[5] + "<br/>")

