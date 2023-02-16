import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { selectProductList } from '../features/product/productSlice';

const LatestViewWrapper = styled(Card)`
  position: fixed;
  top: 100px;
  right: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
  width: 8rem;
`;

function LatestView(props) {
  const productList = useSelector(selectProductList); // 전역state에서 꺼낼 때는 useSelector를 쓴다
  const latestViewed = JSON.parse(localStorage.getItem('latestViewed')); // 첫 진입하면 본 상품이 없기 때문에 null을 반환함 그래서 아래 문장에서 옵셔널 체이닝( .? )을 사용하여 undefined를 반환하게 한다. // JSON.parse를 해야 문자열이 배열로 변경됨
  const latestViewedProduct = latestViewed?.map((id) => productList.find((product) => product.id === id));  // latestViewed에 id가 있었어요!
  
  console.log(productList);
  console.log(latestViewed);
  console.log(latestViewedProduct);

  if (productList.length < 1 || !latestViewedProduct) {   // productList가 빈배열일 경우 또는 latestViewedProduct가 아무것도 넘어오는 게 없으면 동작하지 않겠다.
    return null;
  }

  return (
    <LatestViewWrapper> 
      <Card.Header>최근 본 상품</Card.Header>
      <ListGroup variant="flush">
        {latestViewedProduct.map((product, index) => (
          <React.Fragment key={product.id}>  {/* <></> 리액트프레그먼트는 key값을 속성으로 쓸 수 없어서 React.Fragment를 그냥 씀 */}
            <img src={product.imagePath} alt={`img-${index}`} />
            <ListGroup.Item className='text-ellipsis'>{product.title}</ListGroup.Item>
          </React.Fragment>
        ))}
      </ListGroup>
    </LatestViewWrapper>
  );
}

export default LatestView;