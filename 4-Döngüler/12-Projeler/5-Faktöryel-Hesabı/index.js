// TODO: n kadar sayının ortalamasını bul


// ? For Döngüsü ile 
var n = Number(prompt("N:"));
var faktoryel = 1;

for(var sayi = 1; sayi <= n; sayi++) {
    faktoryel = faktoryel * sayi;
}
document.write(n + "!=" + faktoryel);
 
