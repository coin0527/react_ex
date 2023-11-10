import { useEffect, useState } from "react";

export const UseEffectEx = () => {
  const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     console.log("마운트 or 업데이트 할때 마다 실행!");
  //   });

  //   useEffect(() => {
  //     console.log("마운트 될 때만 실행!");
  //   }, []);

  useEffect(() => {
    console.log("num 값이 변경될때 만 실행");
  }, [num]);

  return (
    <div>
      <h3> {num} </h3>
      <button onClick={() => setNum(num + 1)}> + </button>
      <button onClick={() => setNum(num - 1)}> - </button>
    </div>
  );
};

// useEffect => 앱이 랜더링, 리랜더링, 페이지이동 등의 상황에서
// 부수적인 동작을 할 때 사용

// <리액트 생명주기>
// mount - 첫 랜더링
// update - 업데이트(리랜더링)
// unmount - 화면에서 사라질때
