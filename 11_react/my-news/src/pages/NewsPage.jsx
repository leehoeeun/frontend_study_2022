import React from 'react';
import { useParams } from "react-router-dom";
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

function NewsPage(props) {
  // 여기서 category는 
  const { category } = useParams();
  console.log(category);

  return (
    <>
      <Categories />
      <NewsList category={category || 'all' } />  {/* NewsList에서 category 값에 따라 url 작업한 곳이어서 해당 내용에 category를 보냄 */}
    </>
  );
}

export default NewsPage;