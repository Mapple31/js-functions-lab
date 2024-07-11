/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(number){
    if (number >= 18){
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(character){

    const vowel = 'a'; 'e'; 'i'; 'o'; 'u';

    if (character === vowel){
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 pt.2 Result:', isCharAVowel("y"))

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain){
    email = name + '@' + domain;
    return email;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, timeOfDay){

return greetUser = "Good " + timeOfDay + ", " + name;

}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
// need to remember ${} and simplify string and data combos

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(num1, num2, num3){

    if (num1 > num2 && num3) {
        return num1;
    }
    if (num2 > num1 && num3){
        return num2;
    }
    if (num3 > num1 && num2){
        return num3
    }
    }

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
//incomplete; need to return last number
//changed from ">= || >=" to "&&" and added num3 to the returns

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

// function calculateTip(billAmount, tipPercentage){
//     return (billAmount / tipPercentage)

// } **review material

function calculateTip(billAmount, tipPercentage){
    return billAmount * (tipPercentage/100)
}

console.log('Exercise 7 Result:', calculateTip(50, 20));
//found solution online; forgot math for a second

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

// const Fahrenheit = (9/5)*"C"+32;
// const Celsius = 5/9*("F"-32);

// function convertTemperature(temperature, scale){
//     if(scale === "C"){
//         return Celsius;
//     }
//     if(scale === "F"){
//         return Fahrenheit;
//     }
// }
//returns NaN;

function convertTemperature(temperature, scale){
    if(scale === "C"){
        return (9/5)*temperature+32;
        }
    if(scale === "F"){
        return 5/9*(temperature-32);
    }       
    
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('Exercise 8 pt 2 Result:', convertTemperature(32, "F"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(numb1, numb2, operation){
    if(operation === "subtract"){
        return numb1-numb2;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
//continue iterations for the operation or is there a way to simplify for other results?