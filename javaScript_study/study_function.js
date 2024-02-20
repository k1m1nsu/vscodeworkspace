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

// 이 위치에서도 funcA 쓸 수 있음 컴파일러가 함수 선언 위로 끌어올림 (hoisting)

function funcA(callback) {
    // funcB는 이 안에서만 쓸 수 있음
    function funcB() {
        console.log(`funcB 실행`);
    }
    callback();
    funcB();
}

funcA(function () {
    console.log(`익명함수`);
});

// hoisting 되지 않기때문에 이 위치에서 converMilesToKM() 함수 호출 불가능

const convertMilesToKM = function (distanceInMiles) {
    const distanceInKM = distanceInMiles * 1.609;
    return distanceInKM;
    // 함수 표현식으로 함수 선언, 표현식이기 때문에 세미콜론으로 선언마무리
    // 이 방법을 쓰면 hositing 되지않음
    // 조건에 따라 함수가 만들 수 있기 때문에 그럴 경우 유용함
};

console.log(convertMilesToKM(5));

function getThere(distance) {
    let estimatedTripDuration;
    if (water === true) {
        const getSwimTime = function () {
            return distance / 2;
        };
        estimatedTripDuration = getSwimTime();
    } else {
        const getWalkTime = function () {
            return distance / 4;
        };
        estimatedTripDuration = getWalkTime();
    }
    return estimatedTripDuration;
}

let water = true;
let distance = 30;
console.log(`It will take ${getThere(distance)} hours to get there.`);

// 람다함수

// const pickMovie = function(choices){
//   let myPick = choices[Math.floor(Math.random()*choices.length)];
//   return myPick;
// };

// const pickMovie = (choices) => {
//     let myPick = choices[Math.floor(Math.random() * choices.length)];
//     return myPick;
// };

// 람다함수 simplifying
// If an arrow function takes only one parameter, you don’t need to include the
// parentheses around the parameter list
// If an arrow function contains only a return statement, you can eliminate the
// return keyword and the curly braces around the function body.

const pickMovie = (choices) =>
    choices[Math.floor(Math.random() * choices.length)];

// 람다함수의 this
const obj = {
    name: "Object",
    normalFunction: function () {
        console.log("Normal function - this.name:", this.name);
    },
    arrowFunction: () => {
        console.log("Arrow function - this.name:", this.name);
    },
};
function globalFunction() {
    console.log("Global function - this:", this);
}
obj.normalFunction(); // 출력: Normal function - this.name: Object
obj.arrowFunction(); // 출력: Arrow function - this.name:
globalFunction(); // 출력: Global function - this: Window {...} (브라우저 환경에서는 Window 객체)

// 위에 test2 함수가 파라미터로 선언된 것이 없음에도 argument를 arguments object를 통해 전달받았는데
// 람다함수는 arguments object를 가질 수 없다.
// rest parameter는 가능
const myFunction = (...args) => {
    console.log(`${args[0]}`);
};
myFunction(1, 2, 3, 4, 5); // 1

// 154페이지 Writing Methods 부터 이어서
