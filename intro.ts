function selamVer(isim:string){
    return "Merhaba " +isim
}
let mesaj=selamVer('Ahmet')
console.log(mesaj)

//Değişkenler
let sayi:number=20
sayi=10
let sehir:string
sehir='Ankara'
let dogruMU:boolean
dogruMU=false

let sayilar:number[]=[1,2,3,4]
let sayilar2: Array<number>=[1,2,3]

let dizi:[number,string]=[2,"Ankara"]

enum Renk {Kirmizi=1,Siyah,Mavi}
let renk:Renk=Renk.Kirmizi

let notSure:any="Ankara"
notSure=2
notSure={}

let deger:void=undefined

function merhabaSoyle():void{
    console.log("Merhaba")
}