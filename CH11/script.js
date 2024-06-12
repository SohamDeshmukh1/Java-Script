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
