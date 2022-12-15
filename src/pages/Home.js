import React from "react";
import Button from "../common/Button";
import mainImg from "../img/main.jpg";
import Image from "../common/Image";

const Home = () => {
  return (
    <div className="Home-wrapper">
      <div className="Home-content-container">
        Home 페이지 입니다~
        <Image src={mainImg} alt="home_img"></Image>
        <Button to="/name">시작하기</Button>

      </div>
    </div>
  );
};

export default Home;
