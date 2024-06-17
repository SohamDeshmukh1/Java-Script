// promise example

const pro = ()=>{
    return new Promise((resolve,reject)=>{
        console.log(`This is a promise i am making`);
        resolve(`Resolved`);
        // reject(`Rejected`);
    });
}

let n1 = pro();
n1.then((res)=>{
    console.log(`promise resolved`,res)
});

n1.catch((err)=>{
console.log(`rejected`,err);
})
