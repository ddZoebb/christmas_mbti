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
            <div className="Result-message">"겨울이면 어때, 신나잖아!"</div>
            <div className="Result-prefix">스키를 즐기는</div>
            <div className="Result-title">코코넛</div>
          </div>
          <div className="Result-text-box">
            <div className="Result-text-title">당신의 성격은</div>
            <div className="Result-text-content">
            일반적으로 사람들이 생각하듯 야외에서 앙증맞은 나무 그림을 그리고 있는 그런 유형의 예술가는 아니지만, 진정한 예술가라고 할 수 있습니다. 심미안이나 디자인 감각, 심지어는 그들의 선택이나 행위를 통하여 사회적 관습이라는 한계를 뛰어넘고자 합니다. 실험적인 아름다움이나 행위를 통해 전통적으로 기대되는 행동양식이나 관습에 도전장을 내밉니다. 말없이 다정하고 온화하며 사람들에게 친절하고 상대방을 잘 알게 될 때까지 내면의 모습이 잘 보이지 않습니다. 의견 충돌을 피하고, 인화를 중시합니다. 인간과 관계되는 일을 할 때 자신의 감정과 타인의 감정에 지나치게 민감한 경향이 있습니다.             </div>
          </div>
          <div className="Result-text-box likes">
            <div className="Result-text-title">이런 것을 좋아해요</div>
            <div className="Result-text-content">
              밝은 분위기, 실험적인 예술
            </div>
          </div>
          <div className="Result-text-box dislikes">
            <div className="Result-text-title">이런 것은 싫어해요</div>
            <div className="Result-text-content">
              소문이나 구설수에 휘말리기
            </div>
          </div>
          <div className="Result-relation-box">
            <div className="Result-relation-container">
              <div className="Result-relation-title">잘 맞는 친구들</div>
              <div className="Result-relation-content">소나무, 벽난로</div>
            </div>
            <div className="Result-relation-container">
              <div className="Result-relation-title">안 맞는 친구들</div>
              <div className="Result-relation-content">북극여우, 루돌프</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
