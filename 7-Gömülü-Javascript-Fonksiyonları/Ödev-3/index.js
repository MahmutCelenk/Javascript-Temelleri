// TODO: Kullanıcıdan aaldığınız yarıçap değeri ile Math.PI() özeliğini kullanarak ekrana çemberin alanını ve çevrsini yazdırınız

var r = parseInt(prompt("r:"));
var alan = Math.PI * Math.pow(2,r);
var cevre = 2 * Math.PI * r;

document.write("Alan= " + alan + " Çevre= " + cevre);
