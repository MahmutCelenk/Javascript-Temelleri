var x = 23.456;
document.write(typeof x + "<br/>");
x = x.toString();
document.write(typeof x + "<br/>");


var y = 23.456;
y = y.toExponential()
document.write(y + "<br/>");
document.write(typeof y + "<br/>");


var z = 23.456;
z = z.toFixed(2);
document.write(z +" <br/>");
document.write(typeof z + "<br/>");


var h = 23.456;
h = h.toPrecision(3);
document.write(h + "<br/>");
document.write(typeof h + "<br/>");