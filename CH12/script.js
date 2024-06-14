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
