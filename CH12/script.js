// Time out methds 

console.log(`Print 1`);
console.log(`Print 2`);

setTimeout( ()=>{
    console.log(`Print 3 after 2 seconds`);
} ,4000);

console.log(`Print 3`);

// Callback : calling 1 function into another 
function add(a,b,callback){
    let result = a+b;
    callback(result);
    
    }
