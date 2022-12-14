import React from "react";

function Result() {
  return (
    <div className="Result-wrapper">
      <div className="Result-card">
        <div className="Result-img-container">
          <img className="Result-img" alt="결과이미지" src="img\ISFP.png"></img>
        </div>
        <div className="Result-content-container">
          <div className="Result-box">
            <div className="Result-prefix">스키를 즐기는</div>
            <div className="Result-title">코코넛</div>
          </div>
          <div className="Result-text-box">
            <div className="Result-text-title"></div>
            <div className="Result-text-content"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Result;
