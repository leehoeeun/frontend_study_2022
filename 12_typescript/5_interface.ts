// type 키워드 사용시
type Square = {
  color: string,
  width: number
};
let rect: Square = {
  color: 'red',
  width: 100
};

// 객체에 타입지정할 때 유용한 interface
interface Square2 {
  color: string;
  width: number;
}
let rect2: Square2 = {
  color: 'red',
  width: 100 
};

// interface도 ?를 붙여서 옵셔널 속성 사용 가능함
// readonly 키워드를 사용하여 특정 속성을 편집할 수 없도록 하는 것도 가능
interface Car {
  readonly wheels: number;
  color: string;
  brand: string;
  coupe?: boolean;
}

// Quiz
// interface 사용하여 타입 지정해보기
// 단, teacher 에는 job 속성이 선택적으로 들어올 수 있음
// let people = { name: 'Alice' };
// let teacher = { name: 'Peter', age: 30 };

interface People {
  name: string
}
interface Teacher {
  name: string, // 중복
  age: number,
  job?: string
}
let people: People = { name: 'Alice' };
let teacher: Teacher = { name: 'Peter', age: 30, job: 'teacher' };


// interface는 확장이 가능함
// 인터페이스는 다른 인터페이스를 상속받을 수 있다.
// extends로 상속 가능 (객체지향 개념)
interface People {
  name: string
}
interface Teacher extends People {
  name: string,
  age: number,
  job?: string
}


// (참고)
// type 키워드로 동일하게 하려면...?
type Animal = { name: string };
type Cat = { age: number } & Animal; // & 기호(inersection type)
// 두 타입을 전부 만족하는 타입이라는 뜻

// type 키워드랑 차이점? 인터페이스는
// 1. 상속 기능이 있음 (타입 확장이 편리함)
// 2. 중복 선언이 가능함
// 인터페이스를 중복 선언하면 타입 선언이 계속 중첩됨
// 타입이 다른 중복 속성이 생기면 에러 발생




// Quiz
// Q1. interface를 이용해서 타입을 만들어보세요.
// let product = { 
//   brand: 'Samsung', 
//   serialNumber: 12345, 
//   model: ['TV', 'phone']
// };
interface Product {
  brand: string;
  serialNumber: number; 
  model: string[];
}
let product: Product = { 
  brand: 'Samsung', 
  serialNumber: 12345, 
  model: ['TV', 'phone']
};


// Q2. interface를 이용해서 타입을 만들어보세요.
// 아래와 같이 배열 안에 객체 여러 개가 들어갑니다.
// let cartList = [
//   { product: '냉장고', price: 2000000 }, 
//   { product: '모니터', price: 800000 },
//   { product: '마우스', price: 150000 } 
// ];
// 이렇게 객체들이 잔뜩 들어갈 수 있는 배열은 어떻게 타입을 지정할지?
interface CartItem {
  product: string;
  price: number;
}
let cartList: CartItem[] = [
    { product: '냉장고', price: 2000000 }, 
    { product: '모니터', price: 800000 },
    { product: '마우스', price: 150000 }
  ]; 

// Q3. 위에서 만든 interface 타입을 확장해보세요.
// 갑자기 서비스가 업데이트 되어서 일부 상품은 soldout 속성이 들어가야합니다. 
// let item = { product: '청소기', price: 700000, soldout: true };
// 위에서 만든 interface를 확장해서 타입을 만들어보세요.

interface NewCartItem extends CartItem {
  soldout?: boolean;
}
let item: NewCartItem = { product: '청소기', price: 700000, soldout: true };



