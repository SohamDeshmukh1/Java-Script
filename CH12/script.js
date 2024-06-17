// Time out methds 

console.log(`Print 1`);
console.log(`Print 2`);

setTimeout(() => {
    console.log(`Got Printed With 1 Sec Delay`);
}, 1000);

console.log(`Print 3`);

// Callback : calling 1 function into another 

function say(hello) {
    setTimeout(() => {
        console.log(`I Am Soham Deshmukh`);
        hello();
    }, 1000);
}

function greet() {
    console.log(`Hello `);
}
say(greet);
// More callback practice

setTimeout(() => {
    function calculator(a, b, add, sub) {
        add(a, b);
        sub(a, b);
    }
    function add(a, b) {
        console.log(`Addition is ${a + b}`)
    }
    function sub(a, b) {
        console.log(`Subtraction is ${a - b}`)
    }
    calculator(5, 2, add, sub);
}, 1000); // This will all process will get execute in 5 sec till then all the code above gets executed

// Some timeout + callback example 
// this types is also called as CallBack hell
function data(getdata) {
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(`the data is ${getdata}`);
        resolve();
    }, 2000);
   })
};

let n1 = data(1);
n1.then((res)=>{
    data(2).then();
})


// data(1, () => {
//     console.log('Getting data 2 ....')
//     data(2, () => {
//         console.log('Getting data 3 ....')

//         data(3, () => {
//             console.log('Getting data 4 ....')

//             data(4, () => {
//                 console.log('Getting data 5 ....')

//                 data(5, () => {
//                     console.log('Getting data 6 ....')

//                     console.log(`All data is printed`);
//                 })
//             })
//         });
//     }); // in this i gave value to nextdata in data so the data will fetch value from here
//     // some small issue
// }); Doing thhis with promises

