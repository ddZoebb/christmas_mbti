import React, { useCallback, useContext } from "react";

import SituationDetail from "../components/SituationDetail";
import SituationContext, { SituationConsumer } from "../contexts/situation";

const Situation = () => {
  const situations = [
    {
      id: 1,
      mbti: "E",
      text: "오늘 안에 끝내야 할 일이 산더미인데... 어떡하지?",
      pos: "동료들과 회의를 거쳐 힘을 합친다",
      neg: "나 혼자 집중해서 일을 처리한다",
    },
    {
      id: 2,
      mbti: "N",
      text: "끝나지 않는 마라톤 회의를 보는 당신의 반응은?",
      pos: "논쟁이 있어야 좋은 회의지!",
      neg: "그만들 하고 얼른 일하러 갔으면…",
    },
    {
      id: 3,
      mbti: "P",
      text: "계획했던 일이 원래 방향과는 달라져 버렸다면?",
      pos: "한번 세운 계획은 끝까지 지키려고 노력한다.",
      neg: "즉흥적으로 계획을 바꿔가며 일한다.",
    },
    {
      id: 4,
      mbti: "F",
      text: "퇴근 5분전, 내 도움이 없이는 동료 혼자 남아 야근을 할 것 같다.",
      pos: "내가 도움이 될 수 있다면야… 1시간만 더 일한다.",
      neg: "미안하지만 내 일은 아니니까 퇴근한다.",
    },
  ];
  //const [detail, setDetail] = useState([]);
  const { state } = useContext(SituationContext);
  const selectSit = situations.find((element) => element.id === state.sitCount);

  return (
    <div>
      <SituationDetail selectSit={selectSit} />
    </div>
  );
};

export default Situation;
