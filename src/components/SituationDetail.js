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
            <h3>{selectSit.id}/12</h3>
            <h3>{selectSit.text}</h3>
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
