import React from 'react';
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Button from '../ui/Button';
import PostList from '../list/PostList';

import data from "../../data.json";


const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function MainPage(props) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate('/post-write')
          }}
        />

        <PostList 
          posts={data}
          onClickItem={(post) => {
            navigate(`/post/${post.id}`);  //여기서 id값은 url 파라미터로 사용할 예정
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;