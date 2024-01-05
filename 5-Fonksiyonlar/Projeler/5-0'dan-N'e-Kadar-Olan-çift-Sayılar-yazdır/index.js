var n = Number(prompt("Sayı:"));

function yazX(x) {
    for(var sayi = 0; sayi <= x; sayi = sayi + 2) {
        document.write(sayi + "<br/>");
    }
}

yazX(n);