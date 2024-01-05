// ? Nesen seçme ve değer atama

document.getElementById("manset").innerHTML = "Son Manşet";
document.getElementById("manset").style.color = "red";
document.getElementById("manset").style.fontFamily = "Arial";


document.getElementById("ilk").innerHTML = "İlk paragaf </b>";
document.getElementById("ikinci").innerText = "İkinci paragraf";


var resim = document.getElementById("resim");

function resim1() {
    resim.src = "img/off.gif";
};

function resim2() {
    resim.src = "img/on.gif";
};