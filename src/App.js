/* eslint-disable */
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [postTitle, setPostTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [insert, setInsert] = useState("");
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='top-ui'>
        <button
          className='btn-align'
          onClick={() => {
            let copy = [...postTitle];
            copy.sort();
            setPostTitle(copy);
          }}
        >
          가나다순 정렬
        </button>
      </div>
      {postTitle.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {postTitle[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                👍
              </span>
            </h4>
            {like[i]}
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...postTitle];
                copy.splice(i, 1);
                setPostTitle(copy);
              }}
            >
              글 삭제
            </button>
          </div>
        );
      })}
      {modal === true ? (
        <Modal
          title={title}
          setPostTitle={setPostTitle}
          postTitle={postTitle}
        />
      ) : null}
      <input
        onChange={(e) => {
          setInsert(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy.unshift(insert);
          setPostTitle(copy);
        }}
      >
        글 발행
      </button>
    </div>
  );
}

export default App;
