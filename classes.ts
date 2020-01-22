class Ev{
   private _odaSayisi:number
   public _pencereSayisi:number
    _kat:number
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi=odaSayisi
        this._pencereSayisi=pencereSayisi
        this._kat=kat
    }
    yemekYe(){
        console.log(this._kat+". katta "+" Yemek Yiyildi")
    }
}
let ev=new Ev(3,4,5)
ev.yemekYe()

console.clear()

class Kisi{
    protected isim:string
    private _soyisim:string

    get soyisim():string{
        return "Sayın: "+this._soyisim
    }
    set soyisim(soyad:string){
         this._soyisim=soyad
    }
    Sec(){
        console.log("Seçildi!")
    }
}

class Musteri extends Kisi{
    satisYapildi(){
        console.log("Satış Yapıldı!")
    }
}

class Personel extends Kisi{
    maasOdendi(){
        this.isim="Ahmet"
        console.log("Maaş Ödendi!")
    }
}
 let kisi=new Personel
 kisi.Sec()
 kisi.maasOdendi()
 let kisi2=new Musteri
 kisi2.Sec()
 kisi2.soyisim="Kesici"
 console.log(kisi2.soyisim)
 kisi2.satisYapildi()
 //Kalıtım Yapma => Inheritance
 //Erişim Bildirgeçleri => protected, public, private
 //Özellikler => get-set