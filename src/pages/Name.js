import React from "react";
import Button from "../common/Button";

const Name = () => {
  return (
    <div className="Name-wrapper">
      <div className="Name-content-container">
        <form className="Name-input-container">
          <input className="Name-input" placeholder="이름을 입력하세요"></input>
          <Button to="/situation">다음</Button>
        </form>
      </div>
    </div>
  );
};

export default Name;
