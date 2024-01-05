// TODO: Hava sıcaklığı 0dan kücükse "Dondurucu", 15'ten Kücükse "Soğuk" 25'ten Küçükse "Ilık", diğer durumlarda "sıcak" yazdırınız


var sicaklık = Number(prompt("Sıcaklığı Giriniz"));

if(sicaklık < 0) {
    alert("Dondurucu");
} else if(sicaklık < 15) {
    alert("Soğuk")
} else if(sicaklık < 25) {
    alert("Ilık")
} else {
    alert("Sıcak");
}