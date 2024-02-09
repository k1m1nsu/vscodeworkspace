/*
The Built-In Top-Level Functions in JavaScript

- Boolean() Converts a non-Boolean value to Boolean
- Number() Converts a non-number value to a number
- String() Converts a non-string value to a string
- eval() Runs JavaScript code passed to it as a string
- uneval() Creates a string from source code passed to it
- isFinite() Determines whether the value passed to it is a finite number
- isNaN()Determines whether a value passed to it is NaN
- parseFloat()Converts a string to a floating-point number
- parseInt()Converts a string to an integer
- decodeURI()Decodes a string that has been encoded by encodeURI()
- decodeURIComponent()Decodes a string that has been encoded using encodeURIComponent()
- encodeURI()
- encodeURIComponent()
- 

function that’s being passed is known as a callback function.

function you pass a callback function to is known as the outer function.
*/

const favoriteFood = `tacos`;

function makeDinner(whatToMake) {
  console.log(`I see you want ${whatToMake}`);
  whatToMake = `salad`;
  console.log(`I've decided to make ${whatToMake} instead`);
}
makeDinner(favoriteFood);
favoriteFood; // `tacos`

const user = { username: "funguy37", password: "123456" };

function login(userCredentials) {
  if (userCredentials.password === "123456") {
    let randomString = Math.random().toString(36).slice(-16);
    userCredentials.password = randomString;
    return `Terrible password. Your password has been reset to a random string.`;
  }
  return "Logged In";
}
const loginStatus = login(user);
console.log(loginStatus);
console.warn(`The password is now ${user.password}`);

user; // {username: 'funguy37', password: '0.b1bwxafz61k'}

function test(param1, ...param2) {
  console.log(param1);
  console.log(param2);
}

test(1, 2, 3, 4, 5); // 1 , [2, 3, 4, 5]

function test2() {
  console.log(typeof arguments); // object
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
test2(1, 2, 3, 4, 5, 6);

function greetInSpanish(name) {
  return `Hola, ${name}`;
}
function getUserName(callback) {
  let firstName = prompt("Enter your first name");
  return callback(firstName);
}
getUserName(greetInSpanish);

// if you dont pass an argument for a parameter, that parameter will have a value of undefined inside the function’s body unless you specify a default value.
function greetUser(firstName, lastName) {
  alert(`Hello, ${firstName} ${lastName}`);
}
greetUser();
function greetUser2(firstName = "Valued", lastName = "Customer") {
  // defalut parameters
  alert(`Hello, ${firstName} ${lastName}`);
}
greetUser2();
