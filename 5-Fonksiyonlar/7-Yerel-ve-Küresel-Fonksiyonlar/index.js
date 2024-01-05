// function topla() {
//     var a =1;
//     var b = 2;
//     var toplam = 0;
//     toplam = a + b;
//     alert("Toplam= " + toplam);
// }
// topla();

// function carp() {
//     var carp = a * b;
//     alert("Çarpım = " + carp);
// }
// carp();

//! carp fonkiyonunda hata aldık hata (a,b is not difined) bu hatayı çözmek için a,b yi globalde tanıtmamız gerekmekte biz a,b yi yerelde tanıdığımız için hata aldık 

// ? Globalde tanınıtılmış hali

var a =1;
var b = 2;

function topla() {
    var toplam = 0;
    toplam = a + b;
    alert("Toplam= " + toplam);
}
topla();

function carp() {
    var carp = a * b;
    alert("Çarpım = " + carp);
}
carp();

