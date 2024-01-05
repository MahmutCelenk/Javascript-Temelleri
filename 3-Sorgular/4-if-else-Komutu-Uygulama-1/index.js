var yas = Number(prompt("Yaşınız:"));

if(yas < 18) {
    document.write("Yaşınız Küçük");
    document.write("<br/>");
    document.write("Sitemize üye olamak için ailenizin oyanı gerekmektedir");
} else {
    document.write("Yaşınız Uygun");
    document.write("<br/>");
    document.write("İyi Eğlenceler Dileriz");
}