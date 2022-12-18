import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataConsumer } from "../contexts/data";
import SituationContext from "../contexts/situation";
import KakaoShareButton from "../KaKao";


function Result() {
  const results = [
    {
      id: "ENFJ",
      prefix: "맨앞에서 썰매를 끄는",
      character: "루돌프",
      message: '"앗, 어쩌다보니 내가 다 들고왔네 헤헤"',
      personality:
        "모든 친구들에게 진심으로 따뜻하게 다가가주는 사람이예요. 친구들의 좋은점만을 바라봐주기 때문에 반짝이는 코 때문에 놀림을 받았을 때처럼 때로는 실망하는 일도 있겠지만, 인내심이 강하고 모임이나 대화를 워낙 좋아하기 때문에 다른 사람의 잘못도 금방 용서해주는군요. 힘든 일이라도 차라리 앞장서서 하는 편이 낫다고 생각하기 때문에 집단을 효율적으로 이끌면서도 모두를 편안하게 만들어 줄 수 있어요. 산타의 선물 썰매를 맨 앞에서 끌어나가기에 부족함이 없는 능력과 자질을 가지고 있습니다.",
      likes: "친구들의 고민 들어주기, 새로운 친구 만들기",
      dislikes: "예의나 배려가 없는 사람",
      good: "북극여우,천사",
      bad: "소나무, 눈사람",
    },
    {
      id: "ENFP",
      prefix: "크리스마스 카드를 쓰는",
      character: "꼬마",
      message: '"이거랑 저거, 그리고 요것도 주세요!"',
      personality:
        "언제나 활력이 넘치고 상상력이 풍부한 분이시네요. 기발한 아이디어를 내는 것을 즐기시는군요. 당신은 크리스마스에 받고 싶은 선물을 상상하는 어린 아이처럼 때로는 엉뚱하고 때로는 독창적인 아이디어로 사람들의 어려운 문제를 간단히 해결해주기도 합니다. 따뜻하고 정열적인 당신! 크리스마스에는 친구들에게 카드를 쓰면서 친구들과 행복을 느껴보시면 어떨까요?",
      likes: "동물 친구와 이야기하기, 그림일기쓰기",
      dislikes: "배신, 모호함",
      good: "천사, 산타",
      bad: "엘프, 북극곰",
    },
    {
      id: "ENTJ",
      prefix: "냉철한 눈빛을 가진",
      character: "펭귄",
      message: '"음, 훌륭한 크리스마스 장식이다."',
      personality:
        "카리스마가 넘치는 분이시군요! 당신은 남극의 설원 속에서도 살아가는 펭귄처럼 차갑고 확고한 판단력을 가지고 있습니다. 시간과 자원이 충분하다면 그 어떤 것도 가능하다고 믿기 때문에 엄청난 끈기와 이성적 사고로 다른 친구들을 이끌어 줄거예요. 번뜩이는 눈빛이 아주 멋지네요!",
      likes: "효율적으로 가구 배치하기, 혼잣말하며 계획세우기",
      dislikes: "비효율적으로 일하기",
      good: "북극여우, 꼬마",
      bad: "테디베어, 벽난로",
    },
    {
      id: "ENTP",
      prefix: "투머치토커",
      character: "호두까기 인형",
      message: '"옳게 된 크리스마스란 무엇이냐 하면~"',
      personality:
        "비판과 논쟁 자체를 즐기는 아웃사이더! 완벽한 크리스마스에 대해 끊임없이 말하는 호두까기 인형처럼 풍부한 지식과 빠져드는 입담을 가지고 계시군요. 내 주장을 관철해서 인정받는 것도 좋지만 가끔은 나와 다른 친구들의 이야기를 귀 기울여 들어보는 것도 즐거운 일이 될 거랍니다.",
      likes: "내 말이 맞다고 인정받기, 사람들에게 주목받기",
      dislikes: "관심없는 이야기 듣기",
      good: "천사, 산타",
      bad: "소나무, 테디베어",
    },
    {
      id: "ESFJ",
      prefix: "끝을 알 수 없는",
      character: "선물자루",
      message: '"응? 선물? 기다려봐, 구에에엑!"',
      personality:
        "동정심과 인정이 많으신 분이네요! 주변 사람들을 헌신적으로 도와주고 어울리는 것도 좋아하는 당신은 마치 끝을 알 수 없는 선물자루 같아서 항상 인기가 많습니다. 가끔은 일이나 인간관계에서 냉정한 판단을 어려워하기도 하지만, 특유의 따뜻함과 친절이 당신을 행복한 사람으로 만들어 주고 있네요!",
      likes: "취미를 모으는 취미, 새로운 친구 만들기",
      dislikes: "다른 사람의 말에 귀기울이지 않는 사람",
      good: "코코넛, 엘프",
      bad: "북극여우, 천사",
    },
    {
      id: "ESFP",
      prefix: "훌라춤을 추는",
      character: "북극곰",
      message: '"같이 춤춰요~"',
      personality:
        "언제나 활동적이고 낙천적인 분이군요! 당신은 어떤 상황에든 잘 적응하고 긍정적이기 때문에 겨울에는 눈싸움을 즐기다가도 여름에는 훌라춤을 출 수 있는 북극곰 같은 성격을 가졌어요. 어떤 곳에서나 밝고 재미있는 분위기를 만들면서 주변 사람들을 흐뭇하게 만들어주고 있어요!",
      likes: "깜짝파티, 친구들과 어울리기",
      dislikes: "지루함, 외로움",
      good: "소나무, 벽난로",
      bad: "북극여우, 루돌프",
    },
    {
      id: "ESTJ",
      prefix: "곰곰이 생각하는",
      character: "테디베어",
      message: '"곰곰..."',
      personality:
        "신중하고 정직한 성격을 가지셨네요! 사실에 근거해서 따져보고 해결하기를 좋아하는 당신은, 곰곰이 생각하는 시간이 길어 조금은 느리고 말수가 적어보일 수도 있습니다. 하지만 그동안 쌓아온 믿음과 질서를 잘 지켜나가며 어떤 문제를 만나더라도 객관적인 판단으로 주변 친구들을 돕고 있네요!",
      likes: "책상을 깔끔하게 정리하기, 어제읽은 책 설명하기",
      dislikes: "불필요한 시간낭비",
      good: "진저브레드맨, 엘프",
      bad: "루돌프, 천사",
    },
    {
      id: "ESTP",
      prefix: "손난로를 파는",
      character: "눈사람",
      message: '"자아, 아무때나 살 수 있는게 아니에요!"',
      personality:
        "생각보다는 행동으로 옮기는 것을 좋아하시는 군요! 타고난 사업가인 당신은 눈사람 마을에서도 손난로를 팔 수 있는 능력을 가졌어요. 직설적으로 말하는 것을 좋아하고 에너지가 넘쳐서 망설이지 않고 나서면서 주변 사람들을 즐겁게 만들어주고 있네요!",
      likes: "새로운 일에 도전하기, 내 생각을 말하고 설득하기",
      dislikes: "단조로운 일상, 관습",
      good: "벽난로, 소나무",
      bad: "천사, 루돌프",
    },
    {
      id: "INFJ",
      prefix: "우는 아이에게도 선물주는",
      character: "천사",
      message: '"울고 싶으면 울어도 돼~"',
      personality:
        "마음 속에 이상향을 가지고 있군요! 특유의 단호함과 결단력을 가지고 스스로 원하는 세상을 만들어가는 데에 관심이 많습니다. 다른 사람들에게 긍정적인 영향을 주고 화합해나가는 것에서 행복을 느끼는 사람이네요. 한 두 번 울면 어떤가요? 우는 아이들에게도 선물을 줘야한다고 말하는 당신이 있잖아요!",
      likes: "동물친구와 이야기하기, 친구의 고민 해결해주기",
      dislikes: "너무 많은 생각을 하기, 한번에 여러가지 일을 하기",
      good: "꼬마, 루돌프",
      bad: "코코넛, 북극곰",
    },
    {
      id: "INFP",
      prefix: "캔디케인을 나눠주는",
      character: "북극여우",
      message: '"자 이거 받아!"',
      personality:
        "당신만의 가치관이 확고해요! 이상주의자인 당신은 자신이 제일 좋아하는 간식을 나눠주는 북극여우처럼 순수한 마음을 가졌습니다. 다른 사람의 속마음이나 생각을 잘 알아채지는 못해서 외톨이 같은 기분이 들 수도 있지만, 언젠가는 당신의 마음을 알아 줄 거라고 믿고 있어요. 손해나 이익을 따지지 않고 행동하는 것에 자부심을 느끼는 멋진 사람이네요!",
      likes: "친구의 고민 들어주기, 일기쓰기",
      dislikes: "다른 사람의 눈치보기",
      good: "루돌프, 펭귄",
      bad: "선물자루, 벽난로",
    },
    {
      id: "INTJ",
      prefix: "여름휴가 계획을 세우는",
      character: "산타",
      message: '"이번에는 여기가 좋겠어"',
      personality:
        "여름휴가 계획을 벌써 세우고 있는 산타처럼 모든 것을 미리 계획하는 당신! 쓸데없는 낭비와 비효율을 싫어해서 작은 일에도 규칙을 만들어두기를 원해요. 전략을 세우기 위해서는 넓고 깊은 지식도 필요하기 때문에 호기심과 상상력도 풍부합니다. 가끔은 우연이 주는 즐거움도 찾아보는 것은 어떨까요?",
      likes: "좋아하는 분야를 밤새 조사하기, 책읽기, 수학문제풀기",
      dislikes: "자기 주장이 강한 사람",
      good: "꼬마, 눈사람",
      bad: "벽난로, 선물자루",
    },
    {
      id: "INTP",
      prefix: "새로운 맛을 연구하는",
      character: "진저브레드맨",
      message: '"작년보다 더 맛있을거야!"',
      personality:
        "언제나 아이디어가 뿜뿜! 매년 크리스마스 때마다 친구들에게 새로운 맛을 선보이는 진저브레드맨처럼 연구와 분석에 뛰어난 능력을 가지고 계시는군요. 비과학적이거나 비논리적인 것은 참을 수 없는 당신은 오늘도 묵묵하게 세상을 바라보는 자신만의 관점을 만들고 있습니다. 왕성한 호기심을 가진 당신 덕분에 세상은 더 살기좋은 곳이 되고 있어요!",
      likes: "새로운 쿠키 레시피 만들기, 혼자만의 시간 보내기",
      dislikes: "무식한 사람, 허세부리기",
      good: "루돌프, 펭귄",
      bad: "선물자루, 소나무",
    },
    {
      id: "ISFJ",
      prefix: "언제나 따끈한",
      character: "벽난로",
      message: '"오우, 춥니? 이리와~"',
      personality:
        "따끈한 벽난로 그 자체군요! 받은 것보다 몇 배는 더 베풀어야 마음이 편안한 당신은 진정한 이타주의자예요. 때로는 자신이 가진 것을 희생하더라도 친구나 가족의 행복한 얼굴을 볼 수 있다면 무엇이든 할 수 있습니다. 차분하고 진중하기 때문에 누구에게나 믿음직한 친구가 될 수 있을 거예요!",
      likes: "다른 사람을 돕기, 동식물을 가만히 관찰하기",
      dislikes: "감정에 휘둘리는 것",
      good: "북극곰, 눈사람",
      bad: "꼬마, 천사",
    },
    {
      id: "ISFP",
      prefix: "스키를 즐기는",
      character: "코코넛",
      message: '"겨울이면 어때, 신나잖아!"',
      personality:
        "진정한 마이웨이를 실천하고 있군요! 익숙한 곳을 떠나 스키를 즐기는 코코넛처럼 전통과 관습에 도전하면서 실험적인 아름다움을 찾아다니는 것을 좋아합니다. 주변 친구들에게는 다정하고 온화한 편이지만, 자신의 감정을 중요하게 생각하기 때문에 다른 사람의 눈치를 보지는 않습니다. 괴짜같은 매력이 있는 당신은 어디에서나 눈에 띄네요!",
      likes: "밝은 분위기, 실험적인 예술",
      dislikes: "감정에 휘둘리는 것",
      good: "북극곰, 눈사람",
      bad: "꼬마, 천사",
    },
    {
      id: "ISTJ",
      prefix: "크리스마스 트리가 되고픈",
      character: "소나무",
      message: '"꼬마전구랑 장식을 잔뜩 달고 싶어..!"',
      personality:
        "시간낭비를 싫어하는 현실주의자시군요! 크리스마스 트리가 되고싶다는 구체적인 목표를 가진 소나무처럼 현실적으로 실행 가능한 계획을 세우는 것에서 안정감을 느껴요. 커다란 책임감을 가지는 일을 이루거나 원하는 목표를 달성하기 위해서는 누구보다 세심하고 효율적인 모습을 보여줍니다. 크리스마스에는 잠시 여유를 가지고 트리를 꾸며보는 것은 어떨까요?",
      likes: "한 가지 일에 집중하기, 목표와 계획 세우기",
      dislikes: "단체생활, 잡생각이 많아지는 날",
      good: "북극곰, 눈사람",
      bad: "루돌프, 북극여우",
    },
    {
      id: "ISTP",
      prefix: "장난감을 만드는",
      character: "엘프",
      message: '"어때? 마음에 들어?"',
      personality:
        "할 줄 아는 것이 너무 많은 만능재주꾼이네요! 크리스마스 때마다 전세계 아이들이 원하는 장난감을 뚝딱 만들어내는 엘프처럼 엄청난 상상력과 그것을 실현할 수 있는 기술을 가지고 있습니다. 새로운 것을 만들기 위해서라면 시행착오와 경험도 견딜 수 있어요. 다른 친구들에게 내가 하는 생각이나 내가 만든 물건을 보여준다면 모두들 좋아할 거예요!",
      likes: "모험과 스릴 즐기기, 도구를 다루기, 뚝딱뚝딱 만들기",
      dislikes: "다른 사람의 지나친 관심",
      good: "테디베어, 선물자루",
      bad: "루돌프, 꼬마",
    },
  ];
  const { state } = useContext(SituationContext);
  var MBTI =
    (state.E > 0 ? "E" : "I") +
    (state.N > 0 ? "N" : "S") +
    (state.F > 0 ? "F" : "T") +
    (state.J > 0 ? "J" : "P");

  const result = results.find((element) => element.id === MBTI);
  var imgsrc = "img/" + result.id + ".png";

  return (
    <div className="Result-wrapper">
      <div className="Result-card">
        <div>
          <DataConsumer>
            {({ state }) => (
              <div className="Result-main-title">{state.name} 님의 결과는</div>
            )}
          </DataConsumer>
        </div>
        <div className="Result-img-container">
          <img className="Result-img" alt="결과이미지" src={imgsrc}></img>
        </div>
        <div className="Result-content-container">
          <div className="Result-box">
            <div className="Result-message">{result.message}</div>
            <div className="Result-prefix">{result.prefix}</div>
            <div className="Result-title">{result.character}</div>
          </div>
          <div className="Result-text-box">
            <div className="Result-text-title">당신의 성격은</div>
            <div className="Result-text-content">{result.personality} </div>
          </div>
          <div className="Result-text-box likes">
            <div className="Result-text-title">이런 것을 좋아해요</div>
            <div className="Result-text-content">{result.likes}</div>
          </div>
          <div className="Result-text-box dislikes">
            <div className="Result-text-title">이런 것은 싫어해요</div>
            <div className="Result-text-content">{result.dislikes}</div>
          </div>
          <div className="Result-relation-box">
            <div className="Result-relation-container">
              <div className="Result-relation-title">잘 맞는 친구들</div>
              <div className="Result-relation-content">{result.good}</div>
            </div>
            <div className="Result-relation-container">
              <div className="Result-relation-title">안 맞는 친구들</div>
              <div className="Result-relation-content">{result.bad}</div>
            </div>
          </div>
        </div>
        <KakaoShareButton />
        <div className="Retry-container">
          <Link to="/">
            <button
              className="Retry"
              onClick={() => {
                window.location.replace("/");
              }}
            >
              테스트 다시하기
            </button>
          </Link>
        </div>
        <div className="Credits-container">
          <div className="Credits-developer">Developed by</div>
          <div className="Credits-developer-container">
            <div className="Credits-developer">
              <a href="https://www.instagram.com/ej_rarus">Eunjae Lee</a>
            </div>
            <div className="Credits-developer">
              <a href="https://github.com/ddZoebb">Juhee Lee</a>
            </div>
          </div>
          <div className="Credits-copyright">
            © 2022. EJ&JH. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
