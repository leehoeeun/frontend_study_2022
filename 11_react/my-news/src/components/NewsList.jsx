import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsItem from "./NewsItem";


const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 샘플용
const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
};

// 각 뉴스 정보를 보여주는 컴포넌트
function NewsList({ category }) {
  console.log(category);
  const [articles, setArticles] = useState(null);

  // 데이터 연동하기
  // 컴포넌트가 화면에 보이는 시점에 API를 요청
  // useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을 때 요청
  useEffect(() => {
    // async 함수 선언
    const fetchData = async () => {
      try {
        const query = category === 'all' ? '': `&category=${category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=51bd9087a42c4fd8974a7f4715492a23`);
        console.log(response);
        setArticles(response.data.articles)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();   // 화면 들어가면 바로 호출되도록 작업함  // chapter17에서는 버튼을 눌렀을 때 였으니까 이렇게 안했음
  }, [category]);


  // 아직 articles 값이 없을 때 - 31번줄에 useState(null)이 내려와서
  // articles값이 없을 때는 동작하지 않도록 아래 코드 써줌
  if(!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {/* sampleArticle 렌더링 해보기 */}
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}
      {articles.map((article) => 
        <NewsItem key={article.url} article={article} />
      )}

    </NewsListBlock>
  );
};

export default NewsList;