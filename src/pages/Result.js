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
            <div className="Result-text-title">당신의 성격은</div>
            <div className="Result-text-content">
              이러이러합니다. 이러이러합니다. 이러이러합니다. 이러이러합니다.
              이러이러합니다. 이러이러합니다.
            </div>
          </div>
          <div className="Result-text-box likes">
            <div className="Result-text-title">이런 것을 좋아해요</div>
            <div className="Result-text-content">
              이러이러합니다. 이러이러합니다. 이러이러합니다. 이러이러합니다.
              이러이러합니다. 이러이러합니다.
            </div>
          </div>
          <div className="Result-text-box dislikes">
            <div className="Result-text-title">이런 것은 싫어해요</div>
            <div className="Result-text-content">
              이러이러합니다. 이러이러합니다. 이러이러합니다. 이러이러합니다.
              이러이러합니다. 이러이러합니다.
            </div>
          </div>
          <div className="Result-relation-box">
            <div className="Result-relation-container">
              <div className="Result-relation-title">잘 맞는 친구들</div>
              <div className="Result-relation-content">가나다 마바사</div>
            </div>
            <div className="Result-relation-container">
              <div className="Result-relation-title">안 맞는 친구들</div>
              <div className="Result-relation-content">아자차 카타파</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
