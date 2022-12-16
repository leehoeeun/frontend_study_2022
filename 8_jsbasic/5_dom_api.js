
// querySelector 메소드 - querySelector('css 선택자');
// HTML에서 해당 요소를 검색하여 찾은 첫 번째 요소 하나만 반환
// 요소를 찾지 못하면 null을 반환

// HTML 요소 1개 검색, 찾기 class를 찾을 경우 .선택자 / id를 찾을 경우 #선택자를 써서 찾으면 됨!
const boxEl = document.querySelector('.box');

console.log(boxEl);

// 이벤트를 등록하는 메소드


// 요소에 EventListener 등록하기
// 이벤트 : 마우스(click), 스크롤(scroll), 키보드(keydown) 등... 다양함
// addEventListener() 메소드 : 해당 요소에 지정한 이벤트(event)가 발생하는지 듣고(Listen) 있다가 실제 이벤트가 발생하면 연결된 함수(콜백)를 실행
boxEl.addEventListener('click', function () { //콜백함수 // 이벤트 이름, 함수
  console.log('Click!!');
});

// classList 속성 : 요소의 HTML class 속성에 대한 제어 명령이 포함되어 있음
// add('~') : ~에 적은 것을 클래스로 추가해라
boxEl.classList.add('active'); // 요소에 active라는 클래스를 추가해라
boxEl.classList.contains('active'); //요소에 active라는 클래스 속성의 값이 있는지 확인해라
let hasActive = boxEl.classList.contains('active');
console.log(hasActive);   //요소에 active라는 클래스 속성의 값이 있으면 true를 console에 찍어라

boxEl.classList.remove('active'); // 요소에 active라는 클래스를 제거해라
hasActive = boxEl.classList.contains('active'); 
console.log(hasActive);  //요소에 active라는 클래스 속성의 값이 없음으로 false를 찍을 거야

console.log(boxEl.classList.contains('active'));  // 변수에 안넣고 바로 쓸 수 있음

