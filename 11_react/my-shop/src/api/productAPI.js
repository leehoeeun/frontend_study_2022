import axios from "axios";

// 상품과 관련된 api 요청 함수들을 정의


// 가독성도 좋고 여러곳에서 재사용할 수 있도록 함수로 만듦
export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/products');
    if (response.status === 200) { //요청 시 200 OK 일 때만 결과를 리턴되도록 조건문 추가
      return response.data;
    } else {  // 요청 시 200이 아닌 다른 결과를 return해올 경우
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};



// 실무에 가까운!1 - 서버에서 데이터를 받을 경우
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:4000/products/${id}`);  // http://localhost:4000/products/4 브라우저에서 검색 시 데이터 확인할 수 있음
    if (response.status === 200) { //요청 시 200 OK 일 때만 결과를 리턴되도록 조건문 추가
      return response.data;
    } else {  // 요청 시 200이 아닌 다른 결과를 return해올 경우
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

// 실무에 가까운!2 - 서버로 데이터를 보낼 경우
// export const addProduc = async (product) => {
//   try {
//     const response = await axios.post(`http://localhost:4000/products/product-add`, { product });  //첫번째는 정보를 받을 API 주소, 두번째 인자는 보낼 내용 - { product : product } key : value 값이 똑같으면 위처럼 하나로 적을 수 있음
//     if (response.status === 200) { //요청 시 200 OK 일 때만 결과를 리턴되도록 조건문 추가
//       return response.data;
//     } else {  // 요청 시 200이 아닌 다른 결과를 return해올 경우
//       throw new Error(`api error: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
//     console.error(error);
//     throw error;
//   }
// };

// request.body.product - 관리자에 product 키로 보내면 백엔드에서 이렇게 받는다




// 실무에 가까운!3 - 서버에 전송
// export const orderProduct = async ({ productId, orderCount }) => {
//   try {
//     const response = await axios.post(`http://localhost:4000/products/product-add`, { productId, orderCount });  //첫번째는 정보를 받을 API 주소, 두번째 인자는 보낼 내용 - { product : product } key : value 값이 똑같으면 위처럼 하나로 적을 수 있음
//     if (response.status === 200) { //요청 시 200 OK 일 때만 결과를 리턴되도록 조건문 추가
//       return response.data;
//     } else {  // 요청 시 200이 아닌 다른 결과를 return해올 경우
//       throw new Error(`api error: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
//     console.error(error);
//     throw error;
//   }
// };

// 서버에 보내면 아래와 같이 백엔드에서 꺼내 쓸 수 있음
// request.body.productId
// request.body.orderCount