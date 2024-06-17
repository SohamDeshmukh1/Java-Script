// other files were a bit of mess so new file for more examples of promises

function aync1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            console.log(`Data 1`);
            resolve();
        },5000);
    });
}
function aync2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            console.log(`Data 2`);
            resolve();
        },5000);
    });
}

console.log('Fetching Data 1');
let n1 = aync1();
n1.then(()=>{
    console.log(`Fetching data 2`);
    let n2 = aync2();
    n2.then(()=>{});
})