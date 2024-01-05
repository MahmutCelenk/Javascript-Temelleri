var n = Number(prompt("N:"));

function faktoryel(x) {
   var f = 1;
   for(var i = 1; i <= x; i++) {
      f = f * i;
   }
   return f;
}

alert("n: " + n + " .  n!=" + faktoryel(n));