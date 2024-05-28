// Printing "Hello World First Js" to the console
console.log("Hello World First Js");

// Initializing variables a, b, c, d, e, follow, and unfollow
let a = 1;
let b = 2.1;
let c = "My name is Soham";
let d = null;
let e = undefined;
let follow = true;
let unfollow = true;

// Logging the values of a, b, c, d, e, follow, and unfollow to the console
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(follow);
console.log(unfollow);

// Creating a new block scope and redeclaring variable a with a value of 24
{
    let a = 24;
    console.log(a); // Logging the value of a within the block scope
    console.log("Both are printing A") // Indicating that both instances of a will be printed
}

// Creating another block scope and redeclaring variable a with a value of 22
{
    let a = 22;
    console.log(a); // Logging the value of a within the block scope
    console.log("Both are printing A") // Indicating that both instances of a will be printed
}

// Defining a student object with properties name, age, and isStudent
let student = {
    name: "Soham",
    age: 22,
    isStudent: true
};

// Logging the student object to the console
console.log(student);

// Logging "Practice Question" to the console
console.log("Practice Question");

// Defining a product object with properties name, rating, mrp, Offer, and idDeal
const product = {
    name: "Parker Jotter Standard CT Ball Pen (Black)",
    rating : 4.5,
    mrp : 270,
    Offer : 5,
    idDeal:true
};

// Logging the product object to the console
console.log(product);

// Defining a profile object with properties name, Follow, posts, followers, bio, and messageButton
const profile = {
    name : "Soham Deshmukh",
    Follow : true,
    posts : 123,
    followers : 345,
    bio : "Hello i am soham",
    messageButton : false,
};