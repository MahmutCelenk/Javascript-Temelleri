// Kullanıcılardan sayıları alıyoruz
var genislik = Number(prompt("Genişlik:"));
var yukseklik = Number(prompt("Yükseklik:"));

// Alan Ve Çevre Hesaplıyoruz
var alan = genislik * yukseklik;
var cevre = 2 * (genislik + yukseklik);

// Ekrana yazdırıyoruz
document.write("Alan: " + alan + " Çevre: " + cevre);