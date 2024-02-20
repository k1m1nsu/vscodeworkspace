/*
Global-scoped variables 전역에 걸쳐 사용될 수 있는 변수

Function-scoped variables 함수내에서 선언되었다면 그 함수안에서 어디에서든 사용될 수 있는 변수 var

Block-scoped variables {} 블록안에서 만들어지고 초기화되는 변수 블록 안에서라면 사용가능
*/

function example() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }

    console.log(x); // 10 (함수 스코프 때문에 if 블록 내에서 선언된 변수 x는 함수 전체에서 접근 가능)
    console.log(y); // 에러: 블록 외부에서는 접근할 수 없음
    console.log(z); // 에러: 블록 외부에서는 접근할 수 없음
}

function getThere(distance) {
    // 이 안에서 밖에 있는 water 접근 가능
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
