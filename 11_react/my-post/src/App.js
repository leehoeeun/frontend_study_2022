import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";
import PostDetail from './components/PostDetail';

function App() {
  // 서버에서 데이터를 가져왔다고 가정
  const [posts, setPosts] = useState(['리액트 잘쓰려면?', '자바스크립트 핵심문법', '스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);


  // 내가 어떤 포스트를 눌러서 상세 내용을 보고 있는지!!
  const [currentIndex, setCurrentIndex] = useState(0);

  // 좋아요!
  const [likeCount, setLikeCount] = useState([0, 0, 0]);   // 서버에서 받는다고 할 때 객체에 책제목이랑 같이 좋아요 수가 같이 배열안에 객체로 있을 거다!! 지금은 3 게시물에 각각의 개수를 넣어줌
  // 단, 배열값에 직접 작업하는 것이아니라 해당 배열을 복사한 배열에 작업을 해줘야 함!
  const [inputValue, setInputValue] = useState();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);

  
  return (
    <>
      {/* 상단 헤더 만들기 */}
      <header className='header--dark'>
        <h4>IWPAF</h4>
        <nav>
          <ul>
            <li>트렌드</li>
            <li>패션</li>
            <li>코드</li>
          </ul>
        </nav>
      </header>

      <div className='inner'>
        {/* 포스트 목록 */}
        {/* <div className='list'>
          <h4>{posts[0]}</h4>
          <p>2023년 1월 20일</p>
          <p>by Aicha</p>
        </div>
        <div className='list'>
          <h4>{posts[1]}</h4>
          <p>2023년 1월 20일</p>
          <p>by Aicha</p>
        </div>
        <div className='list'>
          <h4>{posts[2]}</h4>
          <p>2023년 1월 20일</p>
          <p>by Aicha</p>
        </div> */}

      {/* Quiz: map()을 이용하여 post 반복 출력하기 */}
        {posts.map((post, index) => {
          return (
            <div key={index} className='list'
              onClick={() => {
                setShowPostDetail(true);    
                // 클릭하면 setShowPostDetail의 상태 값이 true로 변한 후 보여지는 동작함수
                setCurrentIndex(index);
              }}
            >
            <h4>{post}</h4>
            <p>2023년 1월 20일</p>
            <p>by Aicha</p>

            <hr />
            <div className='toolbar'>
              {/* 좋아요 버튼 */}
              <span onClick={(e) => {
                // (버그 수정) 현재는 좋아요 버튼 누를 때 포스트 상세 보기까지 같이 클릭됨!
                // 부모-자식 관계에 있을 때 이벤트 버블링이 일어남
                e.stopPropagation(); // 상위 요소로 전파되는 이벤트 버블링을 막고 싶을 때
                const copyLikeCount = [...likeCount];
                // 내가 좋아하는 포스트를 클릭할 때 copyLikeCount 올라간다              
                copyLikeCount[index]++;    // (동일식) copyLikeCount[index] += 1
                setLikeCount(copyLikeCount);
                console.log(likeCount);
                console.log(copyLikeCount);

              }}>❤ {likeCount[index]}</span>   
              {/* window + . */}

              {/* Quiz: 포스트마다 삭제버튼 & 기능 만들기 */}
              <span style={{ fontSize: 27 }}
                onClick={(e) => {
                  e.stopPropagation();

                  // TODO : 내 방법
                  // const copyDeletePost = [...posts];
                  // // copyDeletePost.shift(copyDeletePost[index])  // shift()는 가장 앞에것만 삭제함
                  // copyDeletePost.splice(index, 1);  // 내가 누른 포스트 부터 1개만 삭제해라
                  // setPosts(copyDeletePost);  // 재렌더링 일으키기
                  const copyDeleteLikeCount = [...likeCount];
                  copyDeleteLikeCount.splice(index, 1)
                  setLikeCount(copyDeleteLikeCount);

                  // TODO : (다른 방법) 배열의 filter() 함수 사용 (!!!이걸로 많이 씀)
                  // 내가 원하는 결과를 얻을 수도, 날릴 수도 있음
                  // filter(value, index)함수는 원본을 건드리지 않고 새로운 배열을 반환하기 때문에 원본에 해도 됨
                  const filteredPosts = posts.filter((value, idx) => {
                    return index !== idx;    // return 뒤에 true인 것만 요소로 반환함
                  });
                  setPosts(filteredPosts);

                  // 원래 각 배열의 객체 안에 id값이 있으면 아래와 같이!
                  // const filteredPosts = posts.filter((post, idx) => {
                  //   return post.id !== idx;
                  // });
                }}
              >🗑</span>
            </div>

          </div>
        );
        })}

        {/* 새로운 포스트 등록 */}
        {/* QUIZ. input에 제목 입력 후 등록 버튼을 누르면 맨 앞에 새로운 포스트 추가 */}
        <input 
          type="text" 
          value={inputValue}
          onChange={handleChange}
        />
        <button 
          type='button'
          onClick={() => {
            // posts state에 요소 하나 추가하면 자동으로 렌더링 됨
            // post = {inputValue}
            // TODO : 내 풀이
            // const copyInputValue = [inputValue, ...posts];
            // console.log(copyInputValue);
            // setPosts(copyInputValue);
            // const copyLikeCount = [0, ...likeCount];
            // setLikeCount(copyLikeCount);
            // TODO : 선생님 풀이
            const copyPlusPost = [...posts];
            copyPlusPost.unshift(inputValue);  // 배열 맨 앞에 요소 추가 10. javascript > chpater4 > 4_2_built-in_object.html 에서 확인가능
            setPosts(copyPlusPost);
            setInputValue('');

            // 포스트 추가 시 좋아요 카운트도 같이 추가
            const copyLikeCount = [...likeCount];
            copyLikeCount.unshift(0);
            setLikeCount(copyLikeCount);
          }}
        >
          포스트 등록
        </button>

        {/* 포스트 상세 보기 조건부 렌더링 */}
        {showPostDetail? <PostDetail posts={posts} setPosts={setPosts} currentIndex={currentIndex}/> : null}
        {/* {showPostDetail && <PostDetail />} */}
    
      </div>
    </>
  );
}

export default App;

// 연습
// 1. PostListItem 컴포넌트 추출

// 2. input에 아무것도 입력안하고 등록 버튼 누르면
// 1) 유효성 검사해서 등록 안되도록 하는 코드 넣기
// 2) 미입력시 비활성화 -> 입력이 생기면 버튼 활성화

// 3. 날짜 및 작성자, 좋아요 수 등 데이터를 문자열이 아닌 객체 형태로 처리해보기

// 4. 포스트 수정할 때 input 으로 입력받은 내용으로 수정해보기

// 5. 3번처럼 객체형태로 바꾼다면, 글 등록 시 제목, 날짜, 작성자, 상세내용을 입력받아 등록하기

