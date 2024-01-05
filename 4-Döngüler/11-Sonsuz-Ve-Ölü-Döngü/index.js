// ! Sonsuz ve ölü Döngü



// ! Kod bloğunu çalşıtırdığınız anda sonsuz dönyüye girer
// var x = 5;
// var y = 10;

// while(x < y) {
//     document.write("X Küçük");
// }


// ! Ölü döngü 
var x = 5;
var y = 10;

// ? Kontrol edilen şey x > y den yani 5 > 10 dan 5,10 dan büyük olmadığı için döngü çalışmıyor ve ölü döngü oluyor 
while(x > y) {
    document.write("X Küçük");
}