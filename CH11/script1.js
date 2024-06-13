// all about inheritance

class carsget{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

}
class carsShow extends carsget{
    getCarInfo(){
        console.log( `The car is a ${this.year} ${this.brand} ${this.model}`);
    }
}

let sup1 = new carsShow('Audi','S100',2024);
// sup1.brand = "Toyota";
// sup1.model = "Camry";
// sup1.year = 2015; Both method works
sup1.getCarInfo();
// Single Inheritence