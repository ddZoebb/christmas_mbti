import React, { useCallback, useContext } from "react";

import SituationDetail from "../components/SituationDetail";
import SituationContext, { SituationConsumer } from "../contexts/situation";
import Result from "./Result";

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
      mbti: "J",
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
    {
      id: 5,
      mbti: "J",
      text: "크리스마스 이브 파티를 열게 된 당신,",
      pos: "분 단위로 놀 계획을 세운다.",
      neg: "일단 모이고 나서 뭐하고 놀까 생각해본다.",
    },
    {
      id: 6,
      mbti: "N",
      text: "파티에 장식할 크리스마스 트리를 만든다면?",
      pos: "나의 예술적 재능을 최대한 발휘한다.",
      neg: "이런 건 디자인 감각이 좋은 친구에게 부탁한다.",
    },
    {
      id: 7,
      mbti: "E",
      text: "파티에서 처음 만난 사람과 눈이 마주친다면?",
      pos: "바로 자기소개를 하고 친해진다.",
      neg: "더 어색해지기 전에 아는 사람들이 있는 곳으로 간다.",
    },
    {
      id: 8,
      mbti: "F",
      text: "으아! 친구가 내 옷에 와인을 쏟았다…",
      pos: "친구가 민망하지 않게 몇번이고 괜찮다고 말해준다.",
      neg: "실수인 건 알지만 그래도 세탁비는 받는다.",
    },
    {
      id: 9,
      mbti: "F",
      text: "크리스마스 축하 메시지로 떠들썩한 휴대전화,",
      pos: "캐롤도 틀고 크리스마스 분위기 제대로 내볼까?",
      neg: "크리스마스? 그냥 일요일인데 뭐~",
    },
    {
      id: 10,
      mbti: "E",
      text: "어쨌든 오랜만에 휴일인데 뭐하지?",
      pos: "친구야 오늘 뭐해? 먼저 만나자고 연락한다.",
      neg: "그냥 집에 있자… 집에서 혼자만의 시간을 보낸다.",
    },
    {
      id: 11,
      mbti: "N",
      text: "집에서 혼자 시간을 보내기로 한 당신,",
      pos: "하고 싶었던 게 너무 많아 뭐부터 할지 고민한다.",
      neg: "침대와 한 몸이 된다.",
    },
    {
      id: 12,
      mbti: "J",
      text: "그때, 어제 쌓아둔 설거지 거리가 눈에 띈다면?",
      pos: "집안일부터 먼저 하고 휴식을 즐긴다.",
      neg: "집안일은 내일의 나에게 부탁한다.",
    },
  ];
  //const [detail, setDetail] = useState([]);
  const { state } = useContext(SituationContext);
  const selectSit = situations.find((element) => element.id === state.sitCount);
  switch (state.sitCount) {
    case 13:
      return <Result></Result>;

    default:
      return (
        <div>
          <SituationDetail selectSit={selectSit} />
        </div>
      );
  }
};

export default Situation;
