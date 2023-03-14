// class = 설계
// new 라는 객체 생성 연산자를 통해 설계도로부터 객체를 생성함
// TypeScript에서 클래스는 JS ES6의 클래스와 매우 유사

// 객체 타입으로 캐릭터들의 정보를 저장하기
let spiderMan = {
  nation: 'America',
  name: 'Peter',
  height: 177
};
let ironMan = {
  nation: 'America',
  name: 'Tony',
  height: 185
};
// 100개의 캐릭터를 저장하려면 100개의 객체가 필요함
// 비슷한 객체를 여러개 만들일 있으면 class를 만들어 사용
// 비슷한 객체를 무한정 뽑아 사용할 수 있음
// (참고) '객체 생성자 함수' 검색 CheckWeight()라고 나오는 거 참고

// ES5차
// 객체 생성자 함수(constructor)를 통해 class 와 같은 역할을 할 수 있음

// ES6차 (대문자로 시작하는게 관례)
// class의 구성 멤버: 필드, 생성자, 메서드
class HeroCharacter {
  // 필드(데이터, 속성)
  nation: string;
  name: string;
  height: number;

  // 생성자(객체를 생성할 때 호출되고 객체의 초기화를 담당)
  constructor(nation: string, name: string, height: number) {
    this.nation = nation; // this는 생성되는 객체 자신을 가르킴
    this.name = name; // this는 생성되는 객체 자신을 가르킴
    this.height = height; // this는 생성되는 객체 자신을 가르킴
  }

  // 메서드
  fight = () => {
    console.log('빌런과 싸우다.');
  };
}

let spiderMan2 = new HeroCharacter('America', 'Peter', 177);   // 클래스명 옆에 괄호는 함수호출이 아닌 constructor을 불러오는 거임
console.log(spiderMan2);
spiderMan2.fight();    // 함수는 꼭 ()괄호를 붙여야 실행됨!!

let ironMan2 = new HeroCharacter('America', 'Tony', 185);
console.log(ironMan2);

// HeroCharacter 라는 클래스를 상속 받아 새로운 확장된 클래스를 만들 수 있다.
// 필드와 메서드를 상속 받음
class IronManCharacter extends HeroCharacter {
  laser = () => {
    console.log('레이저 빔을 쏘다.');
  };
}

let ironMan3 = new IronManCharacter('America', 'Tony', 185);
console.log(ironMan3.nation, ironMan3.name, ironMan3.height);
ironMan3.fight();
ironMan3.laser();

// ES6 클래스와 차이점은 클래스의 멤버에 접근하는 권한을 설정 가능함(전근 제한자)
// public()  전체 공개 , 
// protected() 상속 받은 클래스에서만 접근가능
// private() 비공개, 해당 클래스 내부에서만 접근가능



// Quiz
// Q1. 아래 조건1과 같은 객체를 생성해내는 Car 클래스를 만들어보세요.
class Car {
  // 필드 선언
  company: string; 
  model: string; 
  price: number;

  // 생성자
  constructor(company: string, model: string, price: number) {
    this.company = company;
    this.model = model;
    this.price = price;
  }

  tax = (): number => {
    return this.price * 0.1;
  }

}

// 조건
// 1. { company: '현대', model: '그랜저', price: 4500 }
// 2. 현재 객체에 저장된 price의 10분의 1 값을 리턴하는 tax() 라는 메서드 만들기 
// 3. 각 속성의 타입 지정하기. tax() 함수의 return 타입 지정하기.


// 결과값
let car = new Car('현대', '그랜저', 4500);
console.log(car); // {tax: ƒ, company: '현대', model: '그랜저', price: 4500}
console.log(car.tax()); // 450


