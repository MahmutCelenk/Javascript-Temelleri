// TODO: Ekranda prompt() komutu ile girilen sayısal değeri 1 artırıp sayfaya kalın harflerle yazdırınız

var sayi = Number(prompt("Bir sayı giriniz"));
document.write("Girilen Sayı: " + sayi++);
document.write("<br/>");
document.write("1 Artırılmış Hali: " + sayi);