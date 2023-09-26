import React, { useState } from "react";

export default function Say() {
  const [message, setMessage] = useState("");
  const onClicklast = () => setMessage("9기");
  const onClickthis = () => setMessage("10기");

  // 무엇을 누르냐에 따라 state가 달라지고, state에 따라 컴포넌트 수정
  return (
    <div>
      <button onClick={onClicklast}>2021</button>
      <button onClick={onClickthis}>2022</button>
      <h1>{message}</h1>
    </div>
  );
}
