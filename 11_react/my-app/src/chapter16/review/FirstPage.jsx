import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function FirstPage(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default FirstPage;