function deger(x:number):number{
    return x
}

let sayi=deger(5)
console.log(sayi)

function deger2<T>(x:T):T{
    return x
}

console.log(deger2<number>(5))
console.log(deger2<string>('Samsun'))
//Generic Type => Metod


class GenericClass<T> {
    degisken:T
    fonksiyon(x:T):T{
        return x
    }
}

let sinif=new GenericClass<number>()
sinif.degisken=5
sinif.fonksiyon(6)

//Generic Type => Class
