var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + ". katta " + " Yemek Yiyildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
console.clear();
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "soyisim", {
        get: function () {
            return "Sayın: " + this._soyisim;
        },
        set: function (soyad) {
            this._soyisim = soyad;
        },
        enumerable: true,
        configurable: true
    });
    Kisi.prototype.Sec = function () {
        console.log("Seçildi!");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYapildi = function () {
        console.log("Satış Yapıldı!");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOdendi = function () {
        this.isim = "Ahmet";
        console.log("Maaş Ödendi!");
    };
    return Personel;
}(Kisi));
var kisi = new Personel;
kisi.Sec();
kisi.maasOdendi();
var kisi2 = new Musteri;
kisi2.Sec();
kisi2.soyisim = "Kesici";
console.log(kisi2.soyisim);
kisi2.satisYapildi();
//Kalıtım Yapma=> Inheritance
