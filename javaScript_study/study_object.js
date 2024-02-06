/*
To make an object, Place curly brace '{}' around a comma-separated list of name:value pairs.
Objects are commonly declared as constants
object는 다른 기본형 타입을 값으로 가질 수 있으며, object 또한 값으로 가질 수 있다. 함수도 가질 수 있으며 메소드라 부름
*/

// 객체를 생성하는 방법은 대략 4가지가 있다.
// 리터럴 노테이션을 이용하는법
// new 키워드를 사용하는법
// 클래스를 정의하는 법
// Object.create() 메소드를 사용하는 법

// literal notation
const person = { eyes: 2, feet: 2, eyeColor: "brown" };
// const person = {}; 빈 객체를 만들고 이후에 추가해줘도된다.

// constructor function
function Cat(name, type) {
  this.name = name;
  this.type = type;
}
const myCat = new Cat(`Murray`, `domestic short hair`);

// Making objects with class
class Dog {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}
const myDog = new Dog(`BeakGu`, `JinDo`);

// Making objects with Object.create()
// 존재하는 객체를 새로운 객체의 프로토타입 삼아 새로운 객체를 만든다
const computer = { memory: `16GB`, HD: `8TB` };
const laptop = Object.create(computer);

// Once you’ve created an object, you can access, modify, and add new properties using one of two methods: dot notation or square brackets notation.
const customer = {
  name: "Laura Wigfall",
  address: "3427 Crummit Lane",
  city: "Providence",
  state: "RI",
  zipcode: "02905",
  customerId: 4,
  isInLoyaltyClub: true,
  sayHello: function () {
    console.log(`Hello!`);
  },
  children: {
    age: 5,
  },
};

// To access the properties of
customer.name; // "Laura Wigfall"
customer[`name`]; // "Laura Wigfall"

// To add a property
customer.height = 6;

/*
다음과 같이 object의 property에 접근할 수 있다.
*/

// for ... in
for (let prop in customer) {
  console.log(`${prop} : ${customer[prop]}`);
}

// Object 메소드를 이용한 방법.
let keysArray = Object.keys(customer); // ['name', 'address', 'city', 'state', 'zipcode', 'customerId', 'isInLoyaltyClub', 'sayHello', 'children']
let valuesArray = Object.values(customer); // ['Laura Wigfall', '3427 Crummit Lane', 'Providence', 'RI', '02905', 4, true, ƒ, {…}]

// 객체의 복사
const newCustomer = { ...customer };

//
const firstObject = { prop1: "test", prop2: "test2" };
const secondObject = { prop1: "test", prop2: "test2" };
const thirdObject = { ...firstObject };
const fourthObject = firstObject;
const fifthObject = Object.create(firstObject);
firstObject === secondObject; // false
firstObject === thirdObject; // false
firstObject === fourthObject; // true
firstObject === fifthObject; // false

const testObject = { test1: 1, test2: { test3: `test3` } };
const testObject2 = { ...testObject };
testObject.test2 === testObject2.test2; // true !!!!!!!!!
// 이는 얕은 수준의 복사다.
// 깊은 수준의 복사를 하고싶으면 이렇게 해보자.
const testObject3 = JSON.parse(JSON.stringify(testObject));
