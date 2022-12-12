import React from "react";
import Button from "./common/Button";

const Name = () => {
  return (
    <form>
      <input placeholder="이름을 입력하세요"></input>
      <Button to="/situation">시작하기</Button>
    </form>
  );
};

export default Name;
