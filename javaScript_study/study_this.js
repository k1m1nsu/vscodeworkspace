var obj = { result: 0 };
obj.add = function (x, y) {
    this.result = x + y;
};
obj.add(3, 4);
console.log(obj); // { result: 7 }

var obj = { result: 0 };
obj.add = function (x, y) {
    this.result = x + y;
};
var add2 = obj.add;
console.log(add2 === obj.add); //true, 동일한 함수
add2(3, 4); //전역 변수 result에 7이 할당됨.
console.log(obj); // { result:0 }
console.log(result); //7

var add = function (x, y) {
    this.result = x + y;
};

var obj = {};
//1. apply() 사용
//add.apply(obj, [3,4])
//2. call() 사용
//add.call(obj,3,4)
//3. bind() 사용
add = add.bind(obj);
add(3, 4);

console.log(obj); // { result : 7 }

var obj = { result: 0 };
obj.add = function (x, y) {
    function inner() {
        this.result = x + y;
    }
    inner();
};
obj.add(3, 4);

console.log(obj); // { result: 0 }
console.log(result); // 7

var obj = { result: 0 };
obj.add = function (x, y) {
    function inner() {
        this.result = x + y;
    }
    inner = inner.bind(this);
    inner();
};
obj.add(3, 4);

console.log(obj); // { result: 7 }

var obj = { result: 0 };
obj.add = function (x, y) {
    const inner = () => {
        this.result = x + y;
    };
    inner();
};
obj.add(3, 4);

console.log(obj); // { result: 7 }
