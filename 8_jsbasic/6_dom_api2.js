// HTML에서 해당 요소를 검색하여 찾은 요소들을 모두 반환
const boxEls = document.querySelectorAll('.box');

console.log(boxEls); // boxEls는 요소들의 리스트가 반환됨 => 앞에서 사용한 속성들을 바로 쓸 수가 없음
// 각 요소의 객체로 불러온 게 아니라, 배열로 갖고 왔기 때문이다. 배열에 객체를 하나씩 꺼내와야 쓸 수 있음 - forEach 메소드를 사용해서!

// forEach 메소드 사용하기
// 인수로 반복요소를 처리하는 함수 추가 가능 => 콜백(함수를 인자함수로 쓰는 것을)함수
// 반복으로 가져온 요소와 요소의 순서(매개변수의 순서가 중요하다, 이름은 자유롭게 지정하면 된다)
boxEls.forEach(function (boxEl, index) { // js에서 매개변수는 let을 통해 선언하지 않아도 된다, boxEl, index가 아닌 다른 변수명을 적어도 된다
  console.log(boxEl, index);

  // boxEl.classList.add('order' + index);
  // boxEl.classList.add(`order-${index + 1}`);  // 백틱 사용을 하면 간단히 표기할 수 있음 
  boxEl.classList.add(`order-${index + 1}`); // order0이 아니라 order1부터 시작하고 싶으면 +1 하면됨
  //배열(boxEls)이 아니라 Dom(boxEl)에 메소드를 쓴다!!!
  // boxEl.classList.remove('box');

  if (index == 1) {
    boxEl.classList.add('order'); // 두번째 div에만 order라는 클래스를 넣고 싶다
  }

})




// 요소의 내용 확인 및 수정
const boxEl = document.querySelector('.box'); // 문서에 box를 클래스로 갖고 있는 태그 중 첫번째를 boxEl이라고 선언하겠다

console.log(boxEl.textContent); // boxEl에 해당하는 요소의 콘텐트(textContent)를 콘솔에 출력해라

boxEl.textContent = 'Grape!!'; // boxEl 요소에 있는 콘텐트(textContent)를 Grape!!으로 바꿔라 
console.log(boxEl.textContent);

// 메소드 체이닝 = 메소드를 .을 이용해서 체인처럼 계속 연결해서 쓴다고 하여~
