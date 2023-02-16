import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";  // useDispatch는 data를 보내는거고, useSelector data를 가져오는 것
import axios from "axios";

// 리액트(JS)에서 이미지 파일 import 하는 법
import mainImg from "../images/mainImg.jpg";
import yImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { 
  getAllProducts, 
  getMoreProduct, 
  getMoreProductAsync, 
  selectProductList, 
  selectStatus
} from "../features/product/productSlice";
import ProductListItem from '../components/ProductListItem';
import { getProducts } from '../api/productAPI';
import LatestView from '../components/LatestView';

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  const dispatch = useDispatch();
  // const productList = useSelector((state) => state.product.productList);  // state 정보를 다 불러와서 그 중 state.product.productList를 골라서 쓰겠다 
  // console.log(productList);

  const productList = useSelector(selectProductList);

  // API 요청 상태 가져오기(로딩 상태)
  // 로딩 만들기 추천 : react-spinners, Lottie Files
  const status = useSelector(selectStatus);

  // 처음 마운트 됐을 때 서버에 상품목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ... api call ...
    dispatch(getAllProducts(data)); // 화물에 담겨서 간다
  }, []);

  const handleGetMoreProducts = async () => {
    const result = await getProducts();
    if (!result) return;  // 결과 값이 안오면 종료 처리 

    // 스토어에 dispatch로 요청보내기
    dispatch(getMoreProduct(result));

    if(status === 'loading') {
      return <h1>로딩중입니다.</h1>;
    }
  };



  return (
    <>
      <section>
        <MainBackground />
        {/* <img src={mainImg}/> */}
      </section>

      {/* 상품 목록 섹션 */}
      <section>
        <Container>
          <Row>
            {/* <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col> */}

            {/* Quiz1: 반복적인 상품 목록 아이템 ProductListItem 컴포넌트화 시키기 */}
            {/* Quiz2: productList 배열을 반복하며 ProductListItem 렌더링 */}
            {/* Quiz3: 상품 정보를 props를 넘겨서 데이터 바인딩 */}
            {productList.map((product, index) => {
              return <ProductListItem key={product.id} product={product}/>
            })}
          </Row>
        </Container>

        {/* 상품더보기 - 실제로 이렇게 사용하는 경우 X*/}
        <Button variant="secondary" className="mb-4"
          onClick={() => {
            // axios.get('http://localhost:4000/products')
            axios.get('https://my-json-server.typicode.com/leehoeeun/storage/products')
              .then((response) => {
                console.log(response.data);
                // 스토어에 dispatch로 요청보내기
                dispatch(getMoreProduct(response.data))
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >더보기</Button>

        {/* 위 HTTP 요청 코드를 함수로 만들어서 api폴더로 추출하고 async/await로 바꾸기 */}
        <Button variant="secondary" className="mb-4" onClick={handleGetMoreProducts}>
          더보기
        </Button>
        
        {/* thunk라는 라이브러리를 통해 비동기 작억 처리하기 */}
        <Button variant="secondary" className="mb-4" 
          onClick={() => dispatch(getMoreProductAsync())}
        >
          더보기 {status}
        </Button>
      </section>

      <LatestView />
    </>
  );
}

export default Main;

// 더보기는 API를 불러와서 더 보여줄 건데
// json-server를 통해 불러올 거임
// 실무와 비슷한 느낌으로 하기 위해 가짜 API 서버를 만듦
// json 파일 하나만 있으면 연습용 서버를 쉽게 구성 가능
// npx json-server ./src/data2.json --port 4000
