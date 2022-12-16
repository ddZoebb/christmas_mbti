import React, { useState } from "react";
import Image from "../common/Image";
import testImg from "../img/app_title.png";
import Button from "../common/Button";
import { SituationConsumer } from "../contexts/situation";

const SituationDetail = ({ selectSit }) => {
  return (
    <div className="Situation-wrapper">
      <SituationConsumer>
        {({ actions }) => (
          <div className="Situation-content-container">
            <Image src={testImg}></Image>
            <h2>{selectSit.text}</h2>
            <Button to="/situation" onClick={() => actions.count()}>
              {selectSit.pos}
            </Button>
            <Button>{selectSit.neg}</Button>
          </div>
        )}
      </SituationConsumer>
    </div>
  );
};

export default SituationDetail;
