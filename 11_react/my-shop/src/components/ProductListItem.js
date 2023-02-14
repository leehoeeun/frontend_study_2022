import produce from 'immer';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

// 이미 만들어져 있는 컴포넌트에 css 를 적용하고 싶을 때!!! const 변수 = sytyled(컴포넌트명)` css 내용 `;
// 방법1: 스타일드 컴포넌트로 스타일 확장
const StyledCol = styled(Col)`
  cursor: pointer;
`;
// 방법2: GlobalStyle 에 공통 스타일로 작성 (이 방법을 더 선호한다!!)
// className="cusor-pointer"  
// GlobalStyle 관련 css 내용은 App.js 파일 내에 있음! 거기서 클래스명만 가져옴

function ProductListItem(props) {
  console.log(props);
  const { product } = props;
  const { imagePath, title, price, id } = product;

  const navigate = useNavigate();
  
  return (
    <>
      {/* <Col md={4} sm={6}>
        <img src={product.imagePath} width="80%" />
        <h4>{product.title}</h4>
        <p>{product.price}원</p>
      </Col> */}
      <StyledCol md={4} sm={6} className="cusor-pointer" >
        <img src={imagePath} width="80%" 
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
        />
        <h4>{title}</h4>
        <p>{price}원</p>
      </StyledCol>
    </>
  );
}

export default ProductListItem;


