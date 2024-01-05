// TODO: ıd değeri "vize1" olan metin kutsunun değeri 0'dan küçük veya 100'den büyükse "lütfen geçerli bir değer giriniz" yazan bir mesaj kutusu çalışsın


function gecerliVize() {
    var vize = Number(document.getElementById("vize1").value);
    if(vize <= 0 || vize >= 101) {
        alert("Lütfen geçerli bir değer giriniz");
    }  
}