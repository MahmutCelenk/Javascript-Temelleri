// TODO: ıd değeri "ad" olan metin kutusunun içeriği boş ise "adınızı giriniz" yazan mesaj kutusu açılsın


function mesaj() {
    var ad = document.getElementById("ad").value;
    if(ad == "") {
        alert("Ad kısmı boş bırakılamaz!!");
    }
}