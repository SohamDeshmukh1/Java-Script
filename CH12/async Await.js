//Async-Await program practice

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Weather is Sunny');
            resolve(200);
        }, 2000);
    });
};

async function weather(){
    console.log(`Fetching API`)
    await api();
    console.log(`API fetched`)
}

// Now using async for the previous callback hel example 

function data(getdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`The data is ${getdata}`);
            resolve(200);
        }, 2000);
    })
}
async function get1 (){
    await data(1);
    await data(2);
    await data(3);
    await data(4);
    await data(5);
    await data(6);
};