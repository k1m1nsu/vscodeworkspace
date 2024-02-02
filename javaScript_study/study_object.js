/*
To make an object, Place curly brace '{}' around a comma-separated list of name:value pairs.
Objects are commonly declared as constants
object는 다른 기본형 타입을 값으로 가질 수 있으며, object 또한 값으로 가질 수 있다. 함수도 가질 수 있으며 메소드라 부름
*/

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
