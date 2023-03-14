// type alias(별칭) 만드는 법
let animalVAlr: string | number | undefined;
// type이 길어지거나 타입을 재사용하고 싶다면 변수처럼 민들어 사용가능


// 영어 대문자로 시작하는 게 관례, 가독성을 위해 뒤테 Type을 불여주기도함
// Type 선언도 변수와 같이 중복 선언 불가
type AnimalType = string | number | undefined;
let animal: AnimalType = `Dog`;

// 객체 타입을 type alias로 만들어보기
type PersonType = {
  name: string,
  age: number
};
let person4: PersonType = {
  name: 'Kim',
  age: 25
};

// 옵셔널(선택적) 속성
type PersonType2 = {
  name: string,
  age?: number    // ?는 age를 선택사항으로 만들어줌
};
let person5: PersonType2 = {
  name: 'Alice',
  // age: 25  // age는 선택사항이 됨
};

// TS를 쓰면 객체 자료 수정도 막을 수 있음
// 속성에 사용 가능한 readonly
type Friend = {
  readonly name: string  // name을 Peter로 바꾸는 걸 못하게 막고 싶을 때 readonly를 붙여줌
};
let friend: Friend ={
  name: 'Peter'
};
// friend.name = 'Tony';   // readonly를 붙여서 name을 변경못하게 막음
// 실제로 자바스크립트에서는 값이 바뀌는데 TS에서는 에러를 발생시켜줌
// (TS 에러는 에디터&터미널 에서만 발생하고 실제 실행과는 상관없음)

// union type을 이용하여 
//  | 연산자로 두 개의 type alias 묶기
type Name = string;
type Age = number;
type PersonTypes = Name | Age;

// intersection type을 이용하여
// & 연산자로 객체 타입을 결합하기
type PositionX = { x: number };
type PositionY = { y: string };

type Position2D = PositionX & PositionY; // { x: number, y: number }

let position: Position2D = { x: 10, y: '20' };

// ----Type : Literal------------------------------------------------------------------------------

// Literal Type으로 더 엄격한 타입 지정하기
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능하고
// 자동완성 기능이 동작함

// 특정 문자만 들어올 수 있도록 지정
let hisName: 'Kim' | 'Goni';
hisName = 'Goni';
// hisName = 'ddd';  // ERROR 지정한 값 외에 넣을 수 없음

// 함수에서 Literal Type 사용하기
function testFunc(params: 'hello'): 1 | 0 {
  // return 10;  // ERROR, return(결과값)을 1,0만 가능
  return 1;
}
// testFunc(1);   // params로 'hello'만 가능
testFunc(`hello`);

// Quiz
// 아래 조건을 만족하는 함수 만들기
// 1. 가위/바위/보 중 1개를 입력할 수 있고 (예: func('가위');)
// 2. 가위/바위/보 만 담을수 있는 배열을 리턴하는 함수 (return ['가위', '보'];)
type rock = '가위' | '바위' | '보';

// function conpitition(params: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
//   return [params];
// }
// console.log(conpitition('가위'));

