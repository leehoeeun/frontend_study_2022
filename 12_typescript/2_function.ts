// 함수

// 1. 함수로 들어오는 자료(파라미터 = 매개변수)
// => 파라미터의 타입 지정은 파라미터 옆에 적으면 됨


// 2. 함수에서 나가는 자료(return 변수[값];)
// => 리턴값에 타입을 지정하고 싶으면 함수명() 우측에 적으면 됨


// 파라미터 x는 숫자만 들어올 수 있음
function multifly(x: number): number {  // 1) 리턴되는 값을 숫자타입으로 제한두고 싶으면 함수명()우측에 적으면 됨
  return x * 2;
  // return x + '1';  // ERROR 발생
}
multifly(10);
// multifly('10'); // ERROR 발생

// 리턴값이 없을 때 리턴 타입 지정: void
function printX(x: number): void {
  console.log(x);
  // return x;  // return이 있는데 리턴 결과값이 void(빈값)이라고 지정하면 오류 뜸
}

// JS 함수와 다른 점: 타입이 지정된 파라미터는 필수임
printX(1);

// 파라미터를 필수가 아닌 옵션일 경우에는 ? 사용
function printY(y?: number):void {
  console.log(y);
}
printY();   // y? 덕분에 파라미터로 빈값을 넘겨도 됨
printY(1);

// Quiz
// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 ~~~"을 출력해주고
// 아무것도 입력하지 않고 함수를 호출하면 "이름이 없습니다" 를 출력하는 함수를 만들어보세요.
// 이 때 파라미터와 return 타입 지정 하기
function callMyName(name?: string):void {
  // return `안녕하세요 ${name}`
  if(name) console.log(`안녕하세요 ${name}님`);
  else console.log(`이름이 없습니다`);
}
callMyName('이회은');
callMyName();

// Q2. 함수에 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보세요. (length 속성 이용)
// 예를 들어 'apple'을 입력하면 5가 return 되어야 함
// 문자 이외의 자료가 들어오면 안됨 

function countLetter(text: string): number {
  return text.length;
}
console.log(countLetter('apple'));





