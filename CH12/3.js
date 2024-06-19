// promise example
const pro = ()=>{
    return new Promise((resolve,reject)=>{
        console.log(`This is a promise i am making`);
        resolve(`Resolved`);
        // reject(`Invalid Data Output`);
    });
}
let n1 = pro();
n1.then((res)=>{
    console.log(`promise resolved`,res)
});
n1.catch((err)=>{
console.log(`Rejected`,err);
})

// Async function example
// This function can work in anyorder due to having an settimeout they dont work as 
// sync function which gets exectued 1 by 1

function Asyn(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log('Data 1');
        resolve(`Success`);
       },3000);
    });
};
setTimeout(()=>{
    console.log(`fetching data`); // did this to make out put look better
},1000);
let new1 = Asyn();
new1.then((res)=>
{
    console.log(res);
});
