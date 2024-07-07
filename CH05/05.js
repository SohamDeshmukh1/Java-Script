// ALl about Functions and methods

// Arrow Functions

const add = (a,b) =>{
    return a + b;
}
console.log(`Addition is ${add(4,7)}`); // Output: 11

const subt = (a,b) =>{
    return a-b;
}
console.log(`subtraction is ${subt(6,2)}`);

const div = (a,b)=>
    {
        return a/b;
    }
console.log(`Division is is ${div(6,2)}`);

// Practice set 
//1] To count the number of vowels
let str1 = "Soham Pravin Deshmukh"
function countvowel(str)
{
    let vowels = ["a","e","i","o","u"];
    let count = 0;
    let str2 = str.toLowerCase().split("");
    for(let i = 0;i<=str.length;i++)
        {
            if(vowels.includes(str2[i]))
                {
                    count++;
                }
        }
        return count;
}
console.log(countvowel(str1));

// 2] now using Arrow Function

let counter = (str1) =>{
    let count = 0;
    for (let char of str1)
        {
            if (char == "a"|| char == "e"||char == "i"||char == "o"||char == "u")
                {
                    count ++;
                }
        }
        return count;
};
console.log(`The number of vowels are ${counter(str1)}`);