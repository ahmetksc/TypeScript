function topla(x, y) {
    return x + y;
}
console.log(topla(55, " Samsun"));
topla(5, 6);
var topla2 = function topla2(x, y) {
    return x + y;
};
console.log(topla2(55, 55));
function topla3(x, y) {
    if (y === void 0) { y = 5; }
    return x + y;
}
console.log(topla3(55));
function topla4(x, y) {
    if (y)
        return x + y;
    return x;
}
//Opsiyonel ve default parametreler sonda olur
console.log(topla4(55));
function davetGonder(ilkDavetiye) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetiye + " " + digerleri.join(" ");
}
console.log(davetGonder("Ahmet", "Emre", "AhmetK", "Koray"));
function davetGonder2() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return digerleri.join(" ");
}
console.log(davetGonder2("Gel", "Sen de Gel", "Sen Gelme Ulan", "Sen Hep Gel"));
