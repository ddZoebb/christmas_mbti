import React from "react";
import Button from "./common/Button";
import mainImg from "./img/main.jpg";
import Image from "./common/Image";

const Home = () => {
  return (
    <div>
      Home 페이지 입니다~
      <div>
        <Image src={mainImg} alt="home_img"></Image>
      </div>
      <Button to="/name">이름 입력하기</Button>
    </div>
  );
};

export default Home;
