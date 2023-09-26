import React, { useRef, useState } from "react";

function Hello() {
  const count = useRef(0);
  const [submit, setSubmit] = useState(true);
  const inputRef = useRef(null); // input 요소에 대한 ref 생성
  const [submittedText, setSubmittedText] = useState(""); // 전송된 텍스트를 저장할 상태

  const handleSubmittedText = () => {
    // input 요소의 현재 값을 가져와 submittedText 상태에 저장
    const text = inputRef.current.value;
    setSubmittedText(text);
  };

  return (
    <>
      <div>{count.current}</div>
      <button
        onClick={() => {
          count.current += 1;
        }}
      >
        +1
      </button>
      <br />
      <button onClick={() => setSubmit(!submit)}>몇 번 눌렀나요?</button>

      <h6>-------------------------------</h6>

      <input ref={inputRef}></input>
      <button
        onClick={() => {
          handleSubmittedText();
        }}
      >
        전송
      </button>
      <h6>전송된 단어 : {submittedText} </h6>
    </>
  );
}

export default Hello;
