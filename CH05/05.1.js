// New learning for each loop
// Total New loops 1] For of,2] For in, 3]For each
// Example

let arr = [1, 2, 3, 201, 4, 5];
arr.forEach((val) => {
    console.log(val);
}
)


let sr1 = arr.forEach((val) => {
    val ** 2;
})
console.log(sr1);// This method for each only perform operation does not create new array
// this wont work like this 

arr.forEach((val) => {
    console.log(`Square of ${val} is ${val ** 2}`);
}) // This does not return new array only perform operation and does not change the existing array

let sqr = arr.map((val) => {
    return val ** 2;
})
console.log(sqr); // This map method returns new array on which the operation is performed as per user

//Filter Method
let arr2 = arr.filter((val) => {
    return val > 4; //this also return new array just like map but we can filter the array here
})
console.log(arr2);
// Reduce method

let sumarr = arr.reduce((res, cur) => {
    return res + cur;
})
console.log(`value is ${sumarr}`); // This method returns single value after performing operation on all elements of array

// returning greatest num1
let big = arr.reduce((res, cur) => {
    return res > cur ? res : cur;

})
console.log(big);

//Practice Set

let marks = [56, 98, 90, 91, 89, 75, 2, 94];
let final = marks.filter((val) => {
    return val >= 90;
})
console.log(final); // Filter method to get marks above 90

//practice 2
let n = prompt("Enter how many numbers sum u want");
let n1 = [];
for (let i = 1; i <= n; i++) {
    n1.push(parseInt(prompt(`Enter num ${i}`)));
}
let sum2 = n1.reduce((res, crt) => {
    return res + crt;
})
console.log(`sum of all numbers given is ${sum2}`);

