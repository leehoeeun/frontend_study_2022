// div.search 요소 선택시 강제 포커스 및 제어
// 검색창 요소(.search) 찾기
const depthFirst = document.querySelector('.gnb_inner');




// .gnb_inner 영역에 마우스가 머물러 있으면
// .depth_1 의 css 가 계속 focus 되어 있으면 좋겠다
// 그리고 .nav_bg도 계속 보였으면 좋겠다

// input 요소에 포커스되면 실행
depthFirst.addEventListener('hover', function () {
  depthFirst.classList.add('hover');

});


