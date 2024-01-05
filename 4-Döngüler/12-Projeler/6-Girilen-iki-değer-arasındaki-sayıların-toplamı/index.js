// TODO: girilen iki değer arasındaki sayıların toplamı

var x = Number(prompt("X:"))
var y = Number(prompt("Y:"));
var toplam = 0;

for(; x<= y; x++) {
    toplam = toplam + x;
}
document.write("Toplam = " + toplam + "<br/>");

