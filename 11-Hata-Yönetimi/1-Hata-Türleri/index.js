function selam() {
    alert("Selam");
    // ulert("selam");
}

// ! Yanlış kullanım
// selam;


// ? Doğru Kullanım
// selam();

//! Mantıksal hata
// ortalama değişkenindeki sayıyı önce toplayıp sonra bölmek gerekir doğrusu ortalama = (a + b) / 2 şeklinde olmalıdır
var a = 1;
var b = 2;
var ortalama = a + b / 2;
alert("Ortalama= " + ortalama);