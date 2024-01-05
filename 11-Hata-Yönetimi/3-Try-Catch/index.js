try {
    aaaalert("hata olabilir")
} catch(err){
    document.getElementById("hata").innerHTML = err.message;
}