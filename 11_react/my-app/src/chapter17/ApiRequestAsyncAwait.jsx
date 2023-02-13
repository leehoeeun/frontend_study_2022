import React, { useState } from 'react';
import axios from "axios";

function ApiRequest(props) {
  // 서버에서 가져온 데이터를 담을 state
  const [data, setData ] = useState(null);

  // 1. async / await
  const handleRequestById = async (id) => {
    try {
      // jsonplaceholder에서 제공하는 테스트용 API 호출
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      console.log(response.data);
      setData(response.data); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <button type='button' onClick={() => handleRequestById(1)}>불러오기</button>
      </div>
      {data && 
        <>
          <textarea cols={70} rows={8} value={JSON.stringify(data, null, 2)} readOnly />
          {/* JSON.stringify(data, null, 2) -> stringify를 w3c 에서 검색하면 인자3개를 넘겨야 함, 첫번째는 필수입력 데이터이고, 두번째, 세번째는 옵션인데 두번째는 데이터를 가공할 함수 또는 null을 넣고, 2는 데이터를 보여주는 디자인적 요소이다   */}
          {/* JSON.stringify(data, (key, value) => {return value + 1 }, 2) */}
          <p>{data.title}</p>
          <img src={data.thumbnailUrl} alt="thumbnail" />
        </>
      }
    </div>
  );
}

export default ApiRequest;

// 자바스크립트를 이용하여 서버 쪽 데이터를 필요로 할 때에는
// Ajax 기법을 사용하여 서버의 API를 호출함으로써 데이터를 수신
// Ajax: 비동기 자바스크립트와 XML

// Ajax 쓰는 다양한 방법
// 1. XMLHttpRequest(XHR) 객체 - 잘 안씀
// 2. fetch() 함수 - ES6차의 HTTP 요청 함수
// 3. axios - 외부 라이브러리 (제일 많이 씀)

// Axios 라이브러리 설치
// npm install axios
// 기본 사용법
// axios.get('url') 여기 까지 입력하면 promise를 쓸 수 있음 그리고 then()을 붙여서 쓸 수 있음
// axios.get('url').then();
// get은 정보를 요청할 때 결과값을 돌려받을 때 url에 담아서 정보를 받아온다
// get으로 보내는 내용은 보안성이 없다(그래서 로그인 정보는 body에 post로 붙여서 보냄)
// 또한 url길이에 대한 제한도 있어서 데이터를 보내는데 한계가 있다.


// {handleRequestById(1)} 와
// {() => handleRequestById(1)} 의 차이점
// 첫번째는 마운트 됐을 때 바로 실행하는 문제점이 있음