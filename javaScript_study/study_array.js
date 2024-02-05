/*
배열은 원시타입도 아니고 정확히는 object도 아니다.
 */

const myArray = new Array();

const myArray2 = new Array(`Jan`, `Feb`);

let customerData = `Barb Seibert,3739 Sheila Lane,Goldfield,NV,89013`;

const customerDataArray = customerData.split(`,`);

const favoriteCities = ["Rome", "Berlin", "New York", "Paris", "Astoria"];

// Accessing
favoriteCities[0]; // `Rome`

// Modifying
favoriteCities[0] = `Seoul`;

// Adding
favoriteCities[5] = `LA`;

// Delete element
delete favoriteCities[5]; // 이렇게 지워도 길이는 그대로고 내부가 비어있다.

favoriteCities.length = 2; // 앞에 두개 빼고 다 지움

// Array object에 정의된 메소드나 프로퍼티를 사용할 수 있다.
/*
Method      Return Value

concat() A new array made up of the current array, joined with other arrays and/or values
-
every() True if every element in the given array satisfies the provided testing function
-
filter() A new array with all the elements of a current array that test true by the given function
-
forEach() Completes the function once for each element in the array
-
includes() Determines whether an array includes a specified value and returns true or false
-
indexOf() Finds the first occurrence of the specified value within the array; returns –1 if the value
is not found
-
join() Joins all elements of an array into a string
-
lastIndexOf() Finds the last occurrence of the specified value within the array; returns –1 if the value
is not found
-
map() Creates a new array with the result of a provided function on every element in the array
-
pop() Removes the last element in an array
-
push() Adds new items to the end of an array
-
reduce() Reduces the values in an array to a single value by applying a function to them (from
left to right)
- ~~~~2024 02 05 여기서부터 이어서 할 것
*/

favoriteCities.length; // 프로퍼티

let myArray3 = [0, 1, 2, 3, 4];
let myArray4 = [5, 6, 7, 8, 9];

let myArray5 = myArray3 + myArray4; // '0,1,2,3,45,6,7,8,9' it's not array
let myArray5 = myArray3.concat(myArray4); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const positive = function positive(params) {
  return params > 0;
};
// 람다식을 이용해 이렇게 할 수도 있다. const positive = (params) => params > 0;

myArray3.every(positive); // false Because of 0
myArray4.every(positive); // true

let temp = myArray3.filter(positive); //[1, 2, 3, 4]

const consolelog = (params) => console.log(params);

myArray3.forEach(double); // 각 요소들로 함수를 수행함

myArray3.includes(0); // true
myArray3.includes(6); // false

myArray4.indexOf(5); // Index of 0   5가 2개 이상이라면 첫 번째 것만
myArray4.indexOf(0); // -1 cuz There's no 0

let temp = myArray3.join(``); // '0,1,2,3,4'
let temp = myArray3.join(`_`); // '0_1_2_3_4'

const double = (params) => params * 2;

let temp = myArray3.map(double); // [0, 2, 4, 6, 8]

temp.pop(); // 8
temp; // (4) [0, 2, 4, 6]
temp.push(8);

const sum = (accumulator, currentValue) => accumulator + currentValue;
let temp2 = temp.reduce(sum, 0);

/* 위의 내용을 풀어서 적자면 이런느낌이다. 
const calculateSum = (array, index, accumulator) => {
  if (index >= array.length) {
    return accumulator;
  }

  return calculateSum(array, index + 1, accumulator + array[index]);
};

const temp2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = calculateSum(temp2, 0, 0);

console.log(sum); // 출력: 55

*/
