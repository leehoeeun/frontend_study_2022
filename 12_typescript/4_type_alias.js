// type alias(별칭) 만드는 법
let animalVAlr;
let animal = `Dog`;
let person4 = {
    name: 'Kim',
    age: 25
};
let person5 = {
    name: 'Alice',
    // age: 25  // age는 선택사항이 됨
};
let friend = {
    name: 'Peter'
};
let position = { x: 10, y: '20' };
// ----Type : Literal------------------------------------------------------------------------------
// Literal Type으로 더 엄격한 타입 지정하기
// 변수에 뭐가 들어올지 더 엄격하게 관리 가능하고
// 자동완성 기능이 동작함
// 특정 문자만 들어올 수 있도록 지정
let hisName;
hisName = 'Goni';
// hisName = 'ddd';  // ERROR 지정한 값 외에 넣을 수 없음
// 함수에서 Literal Type 사용하기
function testFunc(params) {
    // return 10;  // ERROR, return(결과값)을 1,0만 가능
    return 1;
}
// testFunc(1);   // params로 'hello'만 가능
testFunc(`hello`);
// function conpitition(params: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
//   return [params];
// }
// console.log(conpitition('가위'));
