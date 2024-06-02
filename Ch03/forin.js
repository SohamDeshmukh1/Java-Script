// By using for in loop we can itterate through the keys of an object

let student =
{
    name : "Soham Deshmukh",
    age : 25,
    city : "Pune",
    marks : 234
}
// this make us easy to go through every key and access it if needed
for (let i in student)
    {
        console.log(i ,student[i]);
    }