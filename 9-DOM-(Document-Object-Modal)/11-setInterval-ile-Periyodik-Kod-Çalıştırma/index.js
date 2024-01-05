// ? 1. Yöntem
// var i = 0;
// var kutu = document.getElementById("kutu" + "</b>");

// function say() {
//     kutu.innerHTML = i;
//     i++;
// }
// setInterval(say,1000);


// ? 2. Yöntem 
var i = 0;
function say() {
    document.getElementById("kutu").innerHTML ="<b>" + i + "<br/>";
    i++;
}
setInterval(say,1000);


