// practice set of today

//Set 1 
class users {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`The Name of User is: ${this.name}`);
        console.log(`Email Of ${this.name} is: ${this.email}`);
    }
}
// let user1 = new users('Soham','sohamdeshmukh@gmail.com');
// user1.viewData(); this was of set 1 set 2 connects with set 1 fo context of comment
//set 2
class Admin extends users{
    constructor(name,email)
    {
        super(name,email);
    }
    new()
    {
        console.log('New data entry');
    }
}
let user1 = new users('Soham','sohamdeshmukh@gmail.com');
let user2 = new users('Soham1','so1.com');
user1.viewData();
let admin = new Admin('sumeet','sumeet@gmail.com');

