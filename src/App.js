/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  const [postTitle, setPostTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  const [like, setLike] = useState(0);

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy.sort();
          setPostTitle(copy);
        }}
      >
        가나다순 정렬
      </button>
      <div className='list'>
        <h4>
          {postTitle[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <button
          onClick={() => {
            let copy = [...postTitle];
            copy[0] = "여자 코트 추천";
            setPostTitle(copy);
          }}
        >
          변경
        </button>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{postTitle[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{postTitle[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
