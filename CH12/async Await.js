//Async-Await program practice

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Weather Sunny`);
            resolve(200);
        }, 2000);
    });
};

async function weather(){
    await api();
}