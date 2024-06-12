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