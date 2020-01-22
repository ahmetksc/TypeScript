let kumas:number=20
let sonuc:number
let artan:number
function hesapla(sayi:number){
    if(sayi){
        for(let i=1;i<=sayi;i++){
            sonuc=sayi/4.5
            console.log("Sonuç= "+sonuc)
        }
        if(sonuc<kumas){
            let a=sonuc
            let b
            for(let i=1;i<=a;i++){
                b=sonuc/0.5
                console.log("Son Sonuç= "+b)
            } 
        }
    }
    console.log(sonuc)
}
function say(sayi:number){
    for (let i = 0; i < sayi; i++) {
        sonuc=sayi/4 
        console.log(sonuc)
        if(sonuc%2!=0){
            for(i=1;i<=sonuc;i++){
            artan=sonuc/0.5
            console.log(artan)
        }
        }
    }
    console.log(artan)  
}
say(kumas)