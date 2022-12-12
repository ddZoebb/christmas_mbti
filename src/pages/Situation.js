import React from "react";
import Image from "./common/Image";
import testImg from "./img/main.jpg";
import Button from "./common/Button";

const Situation = () => {
  return (
    <div>
      <h1>상황</h1>
      <Image src={testImg}></Image>
      <Button>상황 대답1</Button>
      <Button>상황 대답2</Button>
    </div>
  );
};

export default Situation;
