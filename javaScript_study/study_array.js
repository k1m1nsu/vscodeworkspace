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
indexOf() Finds the first occurrence of the specified value within the array; returns –1 if the value is not found
-
join() Joins all elements of an array into a string
-
lastIndexOf() Finds the last occurrence of the specified value within the array; returns –1 if the value is not found
-
map() Creates a new array with the result of a provided function on every element in the array
-
pop() Removes the last element in an array
-
push() Adds new items to the end of an array
-
reduce() Reduces the values in an array to a single value by applying a function to them (from left to right)
-
reverse()  Reverses the order of elements in an array
-
shift() Removes the first element from an array and returns that element, resulting in a change in length of an array
-
slice() Selects a portion of an array and returns it as a new array
-
sort()
-
splice()
-
*/

favoriteCities.length; // 프로퍼티

let myArray3 = [0, 1, 2, 3, 4];
let myArray4 = [5, 6, 7, 8, 9];

let myArray5 = myArray3 + myArray4; // '0,1,2,3,45,6,7,8,9' it's not array
let myArray5 = myArray3.concat(myArray4); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// every
// filter

const positive = function positive(params) {
  return params > 0;
};
// 람다식을 이용해 이렇게 할 수도 있다. const positive = (params) => params > 0;
myArray3.every(positive); // false Because of 0
myArray4.every(positive); // true

let temp = myArray3.filter(positive); //[1, 2, 3, 4]
const animalNames = [
  "aardvark",
  "alligator",
  "alpaca",
  "bear",
  "beaver",
  "cat",
  "dog",
  "elephant",
];
const animalsStartingWithA = animalNames.filter((animal) =>
  animal.startsWith("a")
);

// forEach
const consolelog = (params) => console.log(params);
myArray3.forEach(consolelog); // 각 요소들로 함수를 수행함

// includes
myArray3.includes(0); // true
myArray3.includes(6); // false

// indexOf
myArray4.indexOf(5); // Index of 0   5가 2개 이상이라면 첫 번째 것만
myArray4.indexOf(0); // -1 cuz There's no 0

// join
let temp = myArray3.join(``); // '0,1,2,3,4'
let temp = myArray3.join(`_`); // '0_1_2_3_4'

// map
const double = (params) => params * 2;
let temp = myArray3.map(double); // [0, 2, 4, 6, 8]
// 이런식으로 HTML 만들기 좋다
const ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];
let listItems = ingredients
  .map((singleIngredient) => `<li>${singleIngredient}</li>`)
  .join(``);

// pop push unshift
temp.pop(); // 8
temp; // (4) [0, 2, 4, 6]
temp.push(8); // [0, 2, 4, 6, 8]
temp.unshift(1);
temp; // [1,0,2,4,6,8]

// reduce
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
// reverse
let temp = [1, 2, 3, 4, 5];
temp.reverse(); // [5,4,3,2,1]

// shift
temp.shift();
temp; // [4, 3, 2, 1]

// slice slice(start, end) start 인덱스부터 end 인덱스를 포함하지 않고 잘라내서 array 리턴
temp.slice(0, 3); // [4, 3, 2]

// sort()
temp.sort();
temp; // [1, 2, 3, 4]

// splice()  array.splice(start, deleteCount, items)
// 특정 인덱스 제거없이 추가
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");
removed; // []
myFish; // ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum", "guitar");

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

// 특정 인덱스 요소 제거
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

// 제거하면서 추가

var myFish = ["angel", "clown", "drum", "sturgeon"];
var removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

/*
  shift   <-----  |-----------------|   -----> pop
                  |      array      |
  unshift ----->  |-----------------|   <----- push

*/

// Destructuring
const person = ["Russell C. Guy", "3447 Twin House Lane", "Neosho", "MO"];

let [personName, address, city, state] = person;
personName; // `Russell C. Guy`

// Spreading Arrays
// 배열 복사하거나 , 원본값 두고 배열을 argument로 쓰고싶을 때 용이함 이는 얕은 수준의 복사이다
const firstArray = ["a", "b", "c"];
const secondArray = [...firstArray, `d`];
secondArray; // ['a', 'b', 'c', 'd']

firstArray.push(`e`);
firstArray; // ['a', 'b', 'c', 'e']
secondArray; // ['a', 'b', 'c', 'd']

const testArray = [1, [2]];
const testArray2 = [...testArray];
testArray[1].push(3);
testArray[1]; // [2,3]
testArray2[1]; // [2,3]
// 깊은 수준 복사
const testArray3 = JSON.parse(JSON.stringify(testArray));
