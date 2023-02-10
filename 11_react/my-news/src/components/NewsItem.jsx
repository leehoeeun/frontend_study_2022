import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;




// API를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링 해주는 컴포넌트
function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {/* 이미지가 있을 경우에만 이미지를 불러오도록 조건부 렌더링 */}
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank">   {/* target="_blank" 새창에 보겠다 */}
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}

      <div className="contents">
        <h2>
          <a href={url} target="_blank">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;