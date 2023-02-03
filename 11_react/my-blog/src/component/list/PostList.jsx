import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;


function PostList(props) {
  const { posts, onClickItem } = props;
  
  return (
    // TODO : 2
    <Wrapper>
      {posts.map((post) => {   // map() 함수는 괄호 안에 return 뒤에 있는 내용을 새로운 배열로 반환한다
        return (<PostListItem 
          key={post.id} 
          post={post} 
          onClick={() => {
            onClickItem(post);
          }}
        />
        );
      })}
    </Wrapper>
  );
}

export default PostList;