// 1. string
let str = `hi`; // string

// Using single quotes
let firstName = "barney";

// Using double quotes
let lastName = "stinson";

// Using backticks
let msg = `My name is ${firstName} ${lastName}`;

// 2. number

let num1 = 1; // number;

let num2 = 1.2345; // number;
// 3. bigInt
let num3 = 112n; // bigInt Add an `n` the end of a number.

let num4 = 1 / 0; // Infinity, which is number type

// 4. NaN
// NaN stands for Not a Number
// Remember!!!!!! typeof 함수에 NaN 을 넣으면 number라고 나온다. isNaN() 함수로 확인해야한다.

Math.sqrt(-1); // Non-real numbers(imaginary numbers) are NaN

`Hi` * `Bye`; // NaN;Any mathematical opreation involving a string, Except addition operator(+)

parseInt("Have a good day!"); // NaN; Coverting a string to a number

// 5. undefined
// 초기화되지않은 변수, 정해진 리턴 값이 없는 statement, function 이 리턴하는 값

// 6. boolean
// Boolean there are only true and false
// If you wanna convert something to Boolean, Use ! operator twice
// Let's find out

!!1; // true
!!`k`; // true
!!Infinity; // true Infinity is number type

!!``; // false
!!0; // false -0 also false
!!0n; // false
!!null; // false
!!undefined; // false
!!NaN; // false

// Everything else is true

// 7. symbol
// 심볼 데이터 타입은 unique한 식별자를 만들 때 사용된다.

let symbol1 = Symbol(`mysymbol`);
let symbol2 = Symbol(`mysymbol`);
symbol1 == symbol2; // false
