// Kullanıcıdan sayıları alıyoruz
var sayi1 = Number(prompt("Birinci Sayıyı Giriniz:"));
var sayi2 = Number(prompt("İkinci Sayıyı Giriniz:"));
var sayi3 = Number(prompt("Üçüncü Sayıyı Giriniz:"));

// Sayıların ortalamasını buluyoruz
var ortalama = (sayi1 + sayi2 + sayi3) / 3;

// Ekrana Yazıdırıyoruz
document.write("Sayıların Ortalaması:" + ortalama);