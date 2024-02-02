/*
&&, || 는 자바와 같다. 이러한 논리 연산자들이 값을 리턴한다는 점을 이용해 재밌는 걸 할 수 있다.
&&    Returns the first falsy operand. If all values are truthy, it returns the value
of the last operand.

||    Returns the value of the first truthy operand. If all the operands evaluate
to false, it returns the last operand.



*/

let loginScreen = !loggedIn && showLogInScreen(); // loggedIn 변수가 false로 판단(변수가 초기화되지않음, false값을 가짐)시 함수가 실행된다.

let language = userPreference.language || `English`; // userPreference.language 가 초기화되지 않았으면 `English` 를 기본값으로 사용

// 3항 연산자
const dt = Date();
const hours = dt.getHours();
let msg;
msg = hours < 12 ? "Good morning!" : "Welcome"; // expression ? value_if_true : value_if_false

if (pet === "cat") {
  greeting = "Good kitty";
} else if (pet === "dog") {
  greeting = "Who's a good boy or girl?";
} else if (pet === "parrot") {
  greeting = "Wanna cracker?";
} else {
  greeting = "Hi.";
}

switch (expression) {
  case x:
    // code to run when expression === x
    break; // dont forget break keyword
  case y:
    // code to run when expression === y
    break;
  default:
  // code to run if nothing else matches expression
}

// for
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// for ... in
const house = { sqft: 800, bdRooms: 2, bthRooms: 1 };

for (let prop in house) {
  let houseDetails = `${prop} : ${house[prop]}`;
  console.log(houseDetails);
}

// for ... of    string, array
const pets = ["cat", "dog", "chicken"];
for (let pet of pets) {
  console.log(pet);
}

// while
