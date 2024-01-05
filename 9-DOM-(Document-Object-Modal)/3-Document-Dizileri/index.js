// ? Document Dizileri
document.write("Link sayısı: " + document.links.length + "<br/>");
document.write("Resim sayısı: " + document.images.length + "<br/>");
document.write("test formu sayısı:" + document.forms["test"].length);


function yaz() {
    var test = document.forms["test"];
    for(var i = 0; i <test.length; i++) {
        document.write(test.elements[i].value + "<br/>");
    };
};