function topla(x,y){
    return x+y
}
console.log(topla(55," Samsun"))
topla(5,6)

let topla2=function topla2(x:number,y:number):number{
    return x+y
}
console.log(topla2(55,55))

function topla3(x:number,y:number=5):number{
    return x+y
}
console.log(topla3(55))

function topla4(x:number,y?:number):number{
    if(y)
        return x+y
    return x
}
//Opsiyonel ve default parametreler sonda olur
console.log(topla4(55))

function davetGonder(ilkDavetiye:string,...digerleri:string[]):string{
    return ilkDavetiye+" "+digerleri.join(" ")
}
console.log(davetGonder("Ahmet","Emre","AhmetK","Koray"))

function davetGonder2(...digerleri:string[]){
    return digerleri.join(" ")
}
console.log(davetGonder2("Gel","Sen de Gel","Sen Gelme Ulan","Sen Hep Gel"))
console.log(davetGonder2("Gel","Sen de Gel","Sen Gelme Ulan","Sen Hep Gel"))