import React from "react";
import Image from "../common/Image";
import testImg from "../img/app_title.png";
import Button from "../common/Button";

const Situation = () => {
  return (
    <div className="Situation-wrapper">
      <Image src={testImg}></Image>
      <Button>상황 대답1</Button>
      <Button>상황 대답2</Button>
    </div>
  );
};

export default Situation;
