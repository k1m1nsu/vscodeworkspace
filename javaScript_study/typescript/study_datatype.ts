let a : number = 4;

let b : string = `a`;

let c : boolean = true;

let d : any = 1; // 아무 타입이나 가능, 타입검사 안함

let e : number[] = [1,2,3,4,5];

let f : null;

let g : undefined;

function h(): void{
}

const i = () : void =>{}

let j : number|string = "hello";

let k : {id:number, age:number, name:{first:string,last:string}} ={
    id : 1001,
    age: 20,
    name :{
        first:`barney`,
        last:`stinson`
    }
}

// 재사용하고싶으면

type TestType {
    id:number,
    age:number,
    name:{
        first:string,
        last:string
    }
}

let l : TestType = {
    id : 1001,
    age: 20,
    name :{
        first:`barney`,
        last:`stinson`
    }
}

function arrayConcat(items1: any[], items2: any[]): any[] {
    return items1.concat(items2);
  } //any 타입의 인자를 전달하는 함수

let arr1 = arrayConcat([10, 20, 30], ["a", "b", 40]);
  arr1.push(true); //어떤 값이라도 추가할 수 있음

function arrayConcat2<T>(items1: T[], items2: T[]): T[] {
    return items1.concat(items2);
  } //제네릭을 적용한 함수

let arr2 = arrayConcat2<number>([10, 20, 30], [40, 50]);
 // arr2.push("hello"); //arr2는 number[] 형식이므로 명시적 에러 발생

 //string 타입에 대한 별칭 부여
type MyType = string;
let q: MyType = "Hello";

//복잡한 타입에 대한 별칭 부여
type MyType2 = { name: string; age: number };
let w: MyType2 = { name: "홍길동", age: 20 };

//선택적 속성과 읽기 전용 속성
type MyType3 = {
    name: string;
    age?: number;
    readonly email: string;
};
let r: MyType3 = { name: "홍길동", email: "gdhong@test.com" };
//읽기 전용이므로 에러 발생
//c.email = "gdhong@test.com";

//튜플 타입 타입과 개수까지 
type TupleType = [string, number];
let t: TupleType = ["hello", 100];

type PersonType = {
    name: string;
    mobile: string;
    birthYear?: number;
  };
  
  type PersonListType = {
    pageNo: number;
    pageSize: number;
    persons: PersonType[];
  };
  
  const personList: PersonListType = {
    pageNo: 2,
    pageSize: 4,
    persons: [
      { name: "정연", mobile: "010-2222-1111" },
      { name: "유나", mobile: "010-2222-1112", birthYear: 1993 },
      { name: "유정", mobile: "010-2222-1113", birthYear: 1992 },
    ],
  };

  type YourType = string | number;

  let a1: YourType = 100;
  let a2: YourType = "hello";

  type PersonType1 = { no: number; name: string; email: string };
type PersonType2 = { no: number; name: string; tel: string };
type PersonTypeUnion = PersonType1 | PersonType2;

let p1: PersonTypeUnion = { no: 1001, name: "홍길동", email: "gdhong@test.com" };
let p2: PersonTypeUnion = { no: 1001, name: "홍길동", tel: "010-1111-1111" };

//email 또는 tel 속성을 포함하지 않으므로 에러 발생
//let p3: PersonTypeUnion = { no: 1001, name: "홍길동" };

type PersonTypeA = {
    no: number;
    name: string;
    email: string;
  };
  type PersonTypeB = {
    no: number;
    name: string;
    tel: string;
  };
  
  type PersonTypeInter = PersonTypeA & PersonTypeB;
  
  const p4: PersonTypeInter = {
    no: 1001,
    name: "홍길동",
    email: "gdhong@test.com",
    tel: "010-1111-1111",
  };

  //숫자 열거형
enum Media {
    Newspaper, //0
    Broadcasting, //1
    SNS, //2
    Magazine, //3
    Youtube, //4
  }
  
  let media1: Media = Media.Youtube;
  console.log(media1); //4 출력
  //문자 열거형
  enum Media2 {
    Newspaper = "신문",
    Broadcasting = "방송",
    SNS = "SNS",
    Magazine = "잡지",
    Youtube = "유튜브",
  }
  
  let media2: Media2 = Media2.Youtube;
  console.log(media2); //"유튜브" 출력

  interface IEmp {
    no: number;
    name: string;
    salary: number;
  }
  
  let emp1: IEmp = { no: 1001, name: "홍길동", salary: 10000 };

  interface IPerson {
    name: string;
    age: number;
  }
  
  interface IPerson {
    name: string;
    tel: string;
  }
  //인터페이스 병합
  let p5: IPerson = { name: "홍길동", tel: "010-111-2222", age: 20 };

  interface IPerson2 {
    name: string;
    age: number;
  }
  
  interface IEmployee extends IPerson2 {
    employeeId: string;
    dept: string;
  }
  
  let e1: IEmployee = { employeeId: "E001", dept: "회계팀", name: "홍길동", age: 20 };

// 명시적으로 타입을 지정하지 않으면 타입을 추론함
//https://www.typescriptlang.org/play