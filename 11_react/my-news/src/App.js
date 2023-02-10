import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useCallback, useState } from 'react';

function App() {
  // 현재 선택한 category 상태 관리
  const [category, setCategory] = useState('all');

  // 자식한테 props를 넘길 때 useCallback을 사용해라
  const handleSelect = useCallback((categoryValue) => {
    setCategory(categoryValue)
  }, []);

  return (
    <>
      <Categories category={category} onSelect={handleSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
