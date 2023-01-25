import Comment from "./Comment";


// 댓글 데이터를 별도의 객체로 분히하고 반복 가능한 배열에 담기
const comments = [
  {
    name: '이회은',
    comment: '안녕하세요. 프론트엔드 엔지니어 이회은입니다.',
    date: '2023.01.19'
  },
  {
    name: '면접관',
    comment: '네, 안녕하세요.',
    date: '2023.01.19'
  },
  {
    name: '면접관',
    comment: '귀하는 합격되었습니다.',
    date: '2023.01.19'
  },
  {
    name: '이회은',
    comment: '확인감사합니다. 그럼 언제부터 출근하면 되나요?',
    date: '2023.01.19'
  },
  {
    name: '면접관',
    comment: '다음주 월요일 10시까지 오셔서 010-2222-3333으로 연락주세요.',
    date: '2023.01.19'
  },
];


// 댓글을 포함하는 CommentList 컴포넌트
function CommentList(props) {
  return(
    <div>
      {/* 배열을 동적으로 렌더링 해야 할때에는 배열의 map() 함수를 사용 */}
      {/* Array.map() : 배열 안에 있는 각 요소를 변환하여 새로운 배열을 만듦 /원본 배열은 건드리지 않고 가공해서 새로운 배열로 만들어 주는 함수 메소드 */}
      {/* 앞으로 리액트에서 동적인 배열을 렌더링해야 할 때는 map()함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면됨 */}
      {/* {comments.map((value, key) => {})} */}
      {comments.map((comments, index) => {
        return (
          <Comment key ={index} name = {comments.name} comment = {comments.comment} date = {comments.date}/>
        );
      })}
      {/* 배열을 넘길 때 브라우저 console에 뜨는 Warning "key"props를 없애는 방법 : key ={index}를 써준다!!  */}

      {/* map() 함수 결과 */}
      {/* React는 객체, 배열 내에 데이터가 변경되는 걸 인지하지 못한다. 그래서 map()과 같이 원본을 두고 새로운 배열, 객체로 만들어주는 동기적 함수를 사용해야 수정, 변경된 부분을 인식한다. 또는 state(상태)를 나타내는 것을 이용해서~~~~~~인식시키는 방법도 있다 */}
      {[
      // <Comment name = {'이회은'} comment = {'안녕하세요, 이회은입니다.'} date = {'2023.01.19'}/>,
      // <Comment name = {'MinRo'} comment = {'안녕하세요, MinRo입니다.'} date = {'2023.01.19'}/>,
      // <Comment name = {'이회은'} comment = {'안녕하세요, 이회은입니다.'} date = {'2023.01.19'}/>,
      ]}


      {/* Data를 하드코딩으로 함 */}
      {/* <Comment 
        name='이회은'
        comment='댓글입니다.'
        date='2023.01.19'
      />
      <Comment 
        name='이회은'
        comment='보고 싶다~! 한국 와라!'
        date='2023.01.19'
      />
      <Comment 
        name='MinRo'
        comment='곧 갈게~'
        date='2023.01.19'
      /> */}
    </div>
  );
}

export default CommentList;