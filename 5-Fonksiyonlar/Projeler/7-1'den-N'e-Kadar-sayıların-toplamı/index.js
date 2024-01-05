var n = Number(prompt("Sayı:"));

function nTopla(x)  {
   var toplam = 0;
   for(let i = 1; i <= x; i++) {
      toplam = toplam + i;
   }
   return toplam;
}

alert("N " + n + " Sayının Toplamı = " + nTopla(n));