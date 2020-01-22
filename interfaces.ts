interface Product{
    id:number
    name:string
    unitPrice:number
}

function save(product:Product){
    console.log(product.name +" Kaydedildi!")
}
save({id:1,name:"Telefon",unitPrice:1000})


interface PersonService{
    save()
}

class CustomerService implements PersonService {
    save() {
       console.log("Kaydedildi!")
    }
}