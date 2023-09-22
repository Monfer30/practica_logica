/*User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/
let user = "maria";
let age =25;
let favoriteMovie = ["ponyo", "laputa", "nausica"];

const newUser = [user, age, favoriteMovie];

function userInfo(newUser) {
    // imprimimos el nombre de usuario y la edad.
    console.log(`The user is ${newUser[0]}, with ${newUser[1]} years,`);
    
    // verificamos si el array de películas favoritas está vacío.
    if (newUser[2].length === 0) {
        console.log("The user does not have any favorite movies.");
    } else {
        // mostramos la lista de películas favoritas del usuario.
        console.log("and the user's favorite movies are:");
        newUser[2].forEach((movie) => {
            console.log(`- ${movie}`);
        });
    }
}

userInfo(newUser);


/*
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
*/

let numbers = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
const highest = Math.max(...numbers);
function highestNumber(numbers) {
    let highest; // declaramos la variable fuera del loop
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > highest) {
        highest = numbers[i];
      }
    }
    return highest;
  }
  
  console.log("the highest number is: " + highest);

/*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".*/

let seconds = prompt("how many seconds until the alarms off?");

function executeAlarm() {
  // show the message
  alert("time to wakeup");
}
// set the timer
setTimeout(executeAlarm, seconds * 1000);
console.log("the alarm is set for  " + seconds + " seconds");

//Palindrome
//Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.


function isPalindrome(word) {
  return word.toLowerCase().replace(/\s+/g, "").split("").reverse().join("") === word;
}

function main() {
  word = prompt("Enter a word or phrase: ");

  isPalindrome = isPalindrome(word);

  if (isPalindrome) {
    alert("The word '" + word + "' is a palindrome.");
    console.log("the word '" + word + "' is a palindrome");
  } else {
    alert("The word '" + word + "' is not a palindrome.");
    console.log("the word '" + word + "' is not a palindrome");
  }
}

main();


//Factorial
//Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

const promptForN = () => {
  //prompt the user for an integer number n.
  const n = prompt("Enter an integer number n: ");
  //n is greater than or equal to 1.
  while (n < 1) {
    alert("Error: n must be greater than or equal to 1.");
    n = prompt("Enter an integer number n: ");
  }
  return n;
};

const printNRecursively = (n) => {
  //n is less than or equal to 0, return.
  if (n <= 0) {
    return;
  }
  console.log(n);
  //recursively print n - 1.
  printNRecursively(n - 1);
};
main = () => {
  const n = promptForN();
  printNRecursively(n);
};

main();

//Flat array
//Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//callbacks
const flatten = (array, result = []) => {
  for (const item of array) {
    if (Array.isArray(item)) {
      flatten(item, result);
    } else {
      result.push(item);
    }
  }

  return result;
};

const flatArray = flatten(array);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
