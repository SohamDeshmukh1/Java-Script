let students = {
    name : "soham",
    age : 22,
    address : {
        city : "pune",
        state : "maharashtra",
        pincode : 411041
    },
    info : function(){
        console.log(students.address);
    },
};


let school = {
   
}
school.__proto__ = students;

console.log(school.age);
console.log(school.address.city);

class BMW {
    start(){
        console.log("BMW is started");
    }
    stop()
    {   
        console.log("BMW is stopped");
    }
}

let S100 = new BMW();
S100.start();
S100.stop();

// using this

class Audi{
    varient(name){
        this.varientname = name;
        console.log(`The varient name is ${this.varientname}`);
    }
}
let s6 = new Audi();
s6.varient('S6100'); // here i kinda knows what i have done but kinda not

// using constructor
class cars {
    constructor(name){
        this.name = name;
    }
    name(){
        console.log(`The name of brand is ${this.name}`);
    }
}
let brand = new cars()
brand.name('Audi');