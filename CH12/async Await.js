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