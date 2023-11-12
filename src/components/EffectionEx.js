export const EffectionEx = () => {
  try {
    // 예외가 발생할거같은 코드를 삽입
    // 값;
    console.log("덧셈" + (1 + 1));
  } catch (error) {
    // 예외 발생시 catch단의 코드가 실행됨
    // error 매개변수로 어떤 에러기 발생했는지 알수있음
    console.log("에러 : " + error);
  } finally {
    // 예외 발생 유무를 따지지 않고 무조건 실행
    console.log("무조건 실행");
  }
  return <div> 예외 </div>;
};

// 오류는 런타임에러, 문법에러 두가지 종류가 있다.
// 런타임 에러는 실행중 문제가 생겼을때, 문법에러는 실행전 발생하는문제
