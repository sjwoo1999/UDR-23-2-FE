import "./App.css";
import React, { useState, useEffect } from "react";
import Hello from "./Hello";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState([]);
  const [num, setNum] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onIncreaseNum = () => {
    setNum(num + 1);
  };

  // input 값이 변경될 때 호출되는 핸들러 함수
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onIncreaseNum();
  };

  // input 값이 변경될 때 로그 추가
  const logInputChange = (e) => {
    setLogs([...logs, "input value changed: ${e.target.value}"]);
  };

  // mount 시점에 실행됨
  useEffect(() => {
    console.log("Mount");
    onIncreaseNum();
    logInputChange();

    return () => {
      // Unmount 시점에 실행
      console.log("unMount");
      onIncreaseNum();
      logInputChange();
    };
  }, []);

  // update : 실시간
  useEffect(() => {
    console.log("update");
  });

  /*
    주어진 코드에서 'useEffect'의 두 번째 매개변수로 의존성 배열을
    전달하지 않았기 때문에, 해당 'useEffect'는 상태나 프로퍼티 변경에
    관계없이 컴포넌트가 렌더링 될 때마다 실행됩니다.

    따라서 이 `useEffect`는 매 렌더링마다 실행되며
    `console.log("update")`와 `onIncreaseNum()` 함수가 실행됩니다.

    따라서 이 코드는 매 렌더링마다 실행되기 때문에 실시간으로 실행되는
    것처럼 보일 수 있지만, 사실은 렌더링마다 실행되기 때문에 주기적인
    작업을 수행하려면 `useEffect` 내에서 타이머를 설정하고
    일정한 시간 간격으로 실행하는 방법을 고려해야 합니다.
    예를 들어, `setInterval`함수를 사용하여 주기적인 작업을 수행할 수
    있습니다.
  */

  // 특정 값 update
  useEffect(() => {
    console.log(`count is updated : ${count}`);
    onIncreaseNum();
    logInputChange();
  }, [count]);

  return (
    <div>
      <button onClick={onIncrease}>+1</button>
      <h1>{count}</h1>
      <input onChange={handleInputChange}></input>
      <h1>{inputValue}</h1>

      <h1>-------------------------------</h1>

      <h1>
        <Hello />
      </h1>

      {/* 로그를 화면에 출력 */}

      <h1>-------------------------------</h1>

      <h2>log count : {num}</h2>

      <div>
        <h2>Logs : </h2>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>

      <h1>-------------------------------</h1>
    </div>
  );
}

export default App;
