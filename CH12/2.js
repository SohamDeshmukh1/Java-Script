// Solution to call back hell Promises 

function data(getData,nextData){
     new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`The data is:${getData}`);
            if(nextData){
                resolve(`Data was Availiable`);
            }
            else{
                reject(`Data was not Availiable`);
            }
    
        },5000);
    });
}
data(1,()=>{
    data(2);
});

