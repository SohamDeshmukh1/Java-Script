let arr = [1,2,3,4,4,"Soham"];

for(let i of arr)
    {
        console.log(i);
    }

//practice to calculate avg of the numbers in an array
let arr1 = [1,2,3,4,1,546,23,21];

let totalNum = arr1.length;
let avg= 0;

for (let i of arr1){
        avg += i;
    }
let totalAvg = avg/totalNum;
console.log(totalAvg);

// Practice 2 To give an offer of 10% to each value in array

let list = [250,645,300,900,50];
let offer = 0.10;

for (let off of list)
    {
        console.log(`Value before 10% off ${off}`)
        off = off-(off*offer);
        console.log(`Value after 10% off ${off}`);
    }
