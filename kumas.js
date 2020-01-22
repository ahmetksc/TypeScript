var kumas = 20;
var sonuc;
var artan;
function hesapla(sayi) {
    if (sayi) {
        for (var i = 1; i <= sayi; i++) {
            sonuc = sayi / 4.5;
            console.log("Sonuç= " + sonuc);
        }
        if (sonuc < kumas) {
            var a = sonuc;
            var b = void 0;
            for (var i = 1; i <= a; i++) {
                b = sonuc / 0.5;
                console.log("Son Sonuç= " + b);
            }
        }
    }
    console.log(sonuc);
}
function say(sayi) {
    for (var i = 0; i < sayi; i++) {
        sonuc = sayi / 4;
        console.log(sonuc);
        if (sonuc % 2 != 0) {
            for (i = 1; i <= sonuc; i++) {
                artan = sonuc / 0.5;
                console.log(artan);
            }
        }
    }
    console.log(artan);
}
say(kumas);
