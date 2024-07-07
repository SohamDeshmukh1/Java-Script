// // Printing numbers from 1 to 10 using a for loop
let i = 1
console.log("For");
for (i; i<=10;i++) {
  // incrementing i from 1 to 10 and printing each value
  console.log(i);
}
console.log("While loop \n");


// // Printing numbers from 1 to 10 using a while loop
i = 1;
while(i<=10) {
  // printing the current value of i and incrementing it
  console.log(i);
  i++;
}


// // Printing numbers from 1 to 10 using a do-while loop
i = 1;
do {
  // printing the current value of i and incrementing it
  console.log(i);
  i++;
} while(i<=10);


// // Calculating the sum of numbers from 0 to 100 using a for loop
sum = 0;
for(i = 0;i<=100;i++) {
  // adding the current value of i to the sum
  sum += i;
}
console.log(sum);


// // Calculating the sum of numbers from 0 to 100 using a while loop
sum = 0;
i = 0;
while(i<=100) {
  // incrementing i and adding its value to the sum
  sum += i;
  i++;
}
console.log(sum);


// // Calculating the sum of numbers from 0 to 100 using a do-while loop
sum = 0;
i = 0;
do {
  // adding the current value of i to the sum and incrementing i
  sum += i;
  i++
} while(i<=100);
console.log(sum);

//Factorial
num = 10
let fact = 1;
for(i = 1;i<=5;i++)
    {

        fact = fact*i;
    }
console.log(fact);

// Practice set

//printing even number
 i = 0;

 for(i;i<=100;i++)
  {
    if(i%2==0)
      {
        console.log("Even Numbers :",i);
      }
  }

// Random Game number uers has to guess the number and 
let random = 9;
let guess = prompt("Guess the number between 1 to 10");
let tried = 0;
while(guess != random){
  guess = prompt("Guess the number between 1 to 10");
  tried++;
}
alert(`Congratulations! You have guessed the number in  ${tried}  attempts`);
// use template literal `` to print or in alert
