
// function calculateAvg(price1, price2) {
//   const sum = price1 + price2;
//   console.log(`두 상품의 가격의 총합은 ${sum}입니다.`);
//   const avg = sum / 2
//   return avg
// }

// const priceA = 3000;
// const priceB = 5000;
// const avg1 = calculateAvg(priceA, priceB);
// console.log(`A와 B의 평균은 ${avg1}입니다.`);

// const priceC = 4000;
// const priceD = 12000;
// const avg2 = calculateAvg(priceC, priceD);
// console.log(`C와 D의 평균은 ${avg2}입니다.`);


// function calculateAvg2(price1, price2, price3) {
//   const sum = price1 + price2 + price3;
//   console.log(`세 제품의 가격 총합은 ${sum}입니다.`);
//   const avg = sum / 3
//   return avg;
// }
// const priceA = 4000;
// const priceB = 8000;
// const priceC = 3000;
// const avgTotal = calculateAvg2(priceA, priceB, priceC);
// console.log(`A, B, C 제품의 평균 가격은 ${avgTotal}입니다.`);


// class Notebook {
// 	constructor(name, price, company) {
// 		this.name = name
// 		this.price = price
// 		this.company = company
// 	}
// }
// const notebook1 = new Notebook('MacBook', 2000000, 'Apple')
// console.log(notebook1) // Notebook { name: 'Macbook', price: 2000000, company: 'Apple' } 
// console.log(notebook1.name) // MacBook
// console.log(notebook1.price) // 2000000
// console.log(notebook1.company) // Apple

// // 클래스 선언
// class Product {
// 	constructor(name, price) {
// 		this.name = name
// 		this.price = price
// 	}

// 	printInfo() {
// 		console.log(`상품명: ${this.name}, 가격: ${this.price}원`)
// 	}
// }

// // 객체 생성 및 메소드 호출
// const notebook = new Product('Apple Macbook', 2000000)
// notebook.printInfo() // 상품명: Apple Macbook, 가격: 2000000원


// const computer = {
// 	name: 'Apple Macbook',
// 	price: 20000,
// 	printInfo: function () {
// 		console.log(`상품명: ${this.name}, 가격: ${this.price}원`)
// 	}
// }

// computer.printInfo()

class Cloth {
  constructor (color, size, price) {
    this.color = color
    this.size = size
    this.price = price
  }
  clothInfo() {
    console.log(`옷 색깔 : ${this.color}, 옷 사이즈 : ${this.size}, 옷 가격 : ${this.price}`);
  }
}
const cloth = new Cloth('검정', 100, 15000);
cloth.clothInfo()
