// Time out methds 

console.log(`Print 1`);
console.log(`Print 2`);

setTimeout( ()=>{
    console.log(`Got Printed With 1 Sec Delay`);
} ,1000);

console.log(`Print 3`);

// Callback : calling 1 function into another 

function say(hello){
    setTimeout(()=>{
        console.log(`I Am Soham Deshmukh`);
        hello();
    },3000);
}

function greet(){
    console.log(`Hello `);
}
say(greet);
// More callback practice

setTimeout(()=>{
    function calculator(a , b , add,sub){
        add(a,b);
        sub(a,b);
    }
    function add(a,b){
        console.log(`Addition is ${a+b}`)
    }
    function sub(a,b){
        console.log(`Subtraction is ${a-b}`)
    }
    calculator(5,2,add,sub);
},50000); // This will all process will get execute in 5 sec till then all the code above gets executed
