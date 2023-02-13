import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

// 1. state로 관리
// function App() {
//   // 현재 선택한 category 상태 관리
//   const [category, setCategory] = useState('all');

//   // 자식한테 props를 넘길 때 useCallback을 사용해라
//   const handleSelect = useCallback((categoryValue) => {
//     setCategory(categoryValue)
//   }, []);

//   return (
//     <>
//       <Categories category={category} onSelect={handleSelect} />
//       <NewsList category={category} />
//     </>
//   );
// }

// export default App;


// 2. 라우팅 + URL 파라미터 로 관리
function App() {

  return (
    <Routes>
      {/* ?는 :category 값이 선택적이라는 의미 */}
      {/* 즉, 있을 수도 있고, 없을 수도 있다는 뜻 */}
      <Route path='/:category?' element={<NewsPage />} />
    </Routes>
  );
}

export default App;