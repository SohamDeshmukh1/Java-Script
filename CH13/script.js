// Dont mind the project ;-;

const url ='https://api.waifu.im/search';

let getdata = async()=>{
    console.log(`Retriving Data`);
    let i = await fetch(url);
    console.log(i);
}
getdata();