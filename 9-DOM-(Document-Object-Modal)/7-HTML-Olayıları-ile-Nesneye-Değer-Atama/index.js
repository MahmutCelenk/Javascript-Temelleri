function tarih() {
    var an = new Date();
    var yil = an.getFullYear();
    var ay = an.getMonth()+1;
    var gun = an.getDate();

    var tarih = "Tarih:" + gun + "/" + ay + '/' + yil;
    document.getElementById("tarih").innerHTML = tarih;
    // document.getElementById("tarih").innerHTML = Date();
}