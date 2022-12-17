import React, { useState } from "react";
import Image from "../common/Image";
import testImg from "../img/app_title.png";
import Button from "../common/Button";
import { SituationConsumer } from "../contexts/situation";

const SituationDetail = ({ selectSit }) => {
  const mbti = selectSit.mbti;
  return (
    <div className="Situation-wrapper">
      <SituationConsumer>
        {({ actions }) => (
          <div className="Situation-content-container">
            <p className="Question">{selectSit.text}</p>
            <Button onClick={() => actions.increase(mbti)}>
              {selectSit.pos}
            </Button>
            <Button onClick={() => actions.decrease(mbti)}>
              {selectSit.neg}
            </Button>
          </div>
        )}
      </SituationConsumer>
    </div>
  );
};

export default SituationDetail;
