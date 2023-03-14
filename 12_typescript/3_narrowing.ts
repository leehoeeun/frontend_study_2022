// 타입스크립트 타입 확정하기 방식(여러가지 존재)
// 언제 타입을 확정해야 할까?

// 예를 들어 
// 함수의 파라미터에 union type을 사용하면 엄격한 타입스크립트가 에러를 발생시킬 수 있음
// Q. 숫자 또는 문자를 인수로 전달하면 +1 해주는 함수를 만들어보세요.
function plusText(text: number | string) {
  // return text + 1; //에러남
}

// 그냥 JS에서는 문자나 숫자 모두 +1 연산이 가능하지만
// TS에서는 변수의 타입이 number | string 과 같은 union type인 경우
// 아직 이 파라미터의 타입이 확실하지 않으니까 자료 조작을 막음

// 비슷한 예로 
function multiflyTwo(x?: number) {
  // return x * 2;  // 에러남
}
// 이럴 때 타입 확정하기 사용

// 대표적인 2가지
// 1. Narrowing (타입 좁히기)
function myFunc(x: number | string) {
  // number | string 이라는 애매한 타입
  // 타입이 하나로 확정되지 않았을 경우 Narrowing을 사용함
  // 방법은 typeof 연산자를 사용하면 됨
  if (typeof x === 'string') {   // x가 string이면 이렇게 하고
    return x + '1';
  } else {                       // x가 number면 이렇게 해라
    return x + 1;
  }
}

function myFunc2(x: number | string) {
  let array: number[] = [];    
  // array[0] = x;   // ERROR
  if (typeof x === 'number') {
    return array[0] = x;
  }
  console.log(array);
}
myFunc2(1);
myFunc2('ai');

// 2. Assertion (타입 단언) => 변수의 타입을 특정 타입으로 생각해라
// 즉, TS가 인식을 할 수 있게 해주는 거지 실제로 바뀌는 것은 아님
function myFunc3(x: number | string) {
  let array: number[] = [];    
  array[0] = x as number;  // x의 타입을 number로 인식해라. TS한테 
  console.log(array);
}

// Assertion 문법의 용도
// 1. union type 을 하나의 타입으로 확정할 때 사용
// (특정 타입을 다른 타입으로 바꿔쓰는 건 안됨!)
// 2. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러 해결용으로 사용하거나
// 무슨 타입이 들어올지 정확하게 알고 있는데 타입 에러가 나서 코드 실행을 방해할 때

// 단점: 위 예제에서 string 을 념겨도 타입에러가 발생하지 않기 때문에 as 문법을 쓰면 TS 쓰는 이유가 없어짐

myFunc3('a123');