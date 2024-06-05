// New learning for each loop
// Total New loops 1] For of,2] For in, 3]For each
// Example

let arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
}
)


let sr1 = arr.forEach((val)=>{
    val**2; })
console.log(sr1);// This method for each only perform operation does not create new array
// this wont work like this 

arr.forEach((val)=>{
    console.log(`Square of ${val} is ${val**2}`);}) // This does not return new array only perform operation and does not change the existing array

let sqr = arr.map((val)=>{
    return val**2;
})
console.log(sqr); // This map method returns new array on which the operation is performed as per user