var sayilar = [1,5,2,6,3];
document.write("Dizi:" +sayilar + "<br/>");
document.write("Eleman Sayısı " + sayilar.length + "<br/>");

sayilar.sort();
document.write("Küçüten Büyüğe Sıralama: " + sayilar + "<br/>");

sayilar.reverse();
document.write("Büyükten Küçüğe Sıralama: " + sayilar + "<br/>");

sayilar.push(20);
document.write("Dizinin Sonuna Eleman Ekleme: " + sayilar + "<br/>");


sayilar.unshift(99);
document.write("Dizinin Başına Eleman Ekleme: " + sayilar + "<br/>");

sayilar.shift();
document.write("Dizinin İlk Elemanını Siler: " + sayilar + "<br/>");

sayilar.pop();
document.write("Dizinin Son Elemanını Siler: " + sayilar + "<br/>");