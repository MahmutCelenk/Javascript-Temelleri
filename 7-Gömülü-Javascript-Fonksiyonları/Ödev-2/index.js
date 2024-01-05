// TODO: Ekrana Math.random() ile 5 adet rastgele sayı yazdırınız


// ? 0 ile 1 arasında rastgele sayılar üretmekte
for(let i = 0; i< 5; i++) {
    var rastgeleSayi = Math.random(rastgeleSayi);
    document.write(rastgeleSayi + "<br/>");
}

document.write("<br/>")


// ? 0 ile 100 arasında rastgele sayılar üretmekte
for(var i = 0; i < 5; i++) {
    var rastgeleTamSayi = Math.floor(Math.random(rastgeleTamSayi) * 101);
    document.write(rastgeleTamSayi + "<br/>");
} 