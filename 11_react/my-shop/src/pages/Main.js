import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";  // useDispatch는 data를 보내는거고, useSelector data를 가져오는 것

// 리액트(JS)에서 이미지 파일 import 하는 법
import mainImg from "../images/mainImg.jpg";
import yImg from "../images/yonex.jpg";

// 서버에서 받아온 데이터라고 가정
import data from "../data.json";
import { getAllProducts } from "../features/product/productSlice";
import ProductListItem from '../components/ProductListItem';

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);  // state 정보를 다 불러와서 그 중 state.product.productList를 골라서 쓰겠다 
  console.log(productList);

  // 처음 마운트 됐을 때 서버에 상품목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 데이터를 요청했다고 가정
    // ... api call ...
    dispatch(getAllProducts(data)); // 화물에 담겨서 간다
  }, []);

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
      </section>
    </>
  );
}

export default Main;