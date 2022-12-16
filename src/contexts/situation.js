import { createContext, useCallback, useState } from "react";

const SituationContext = createContext({
  state: { E: 0, N: 0, F: 0, J: 0, sitCount: 1 },
  actions: {
    increase: () => {},
    decrease: () => {},
  },
});

const SituationProvider = ({ children }) => {
  const [E, setE] = useState(0);
  const [N, setN] = useState(0);
  const [F, setF] = useState(0);
  const [J, setJ] = useState(0);

  const [sitCount, setSitCount] = useState(1);

  const increase = useCallback(
    (mbti) => {
      switch (mbti) {
        case "E":
          setE(E + 1);
          setSitCount(sitCount + 1);

          break;
        case "N":
          setN(N + 1);
          setSitCount(sitCount + 1);

          break;
        case "F":
          setF(F + 1);
          setSitCount(sitCount + 1);
          break;
        case "J":
          setJ(J + 1);
          setSitCount(sitCount + 1);
          break;
        default:
          return console.log("클릭됨");
      }
    },
    [E, N, F, J, sitCount]
  );

  const decrease = useCallback(
    (mbti) => {
      switch (mbti) {
        case "E":
          setE(E - 1);
          setSitCount(sitCount + 1);

          break;
        case "N":
          setN(N - 1);
          setSitCount(sitCount + 1);

          break;
        case "F":
          setF(F - 1);
          setSitCount(sitCount + 1);
          break;
        case "J":
          setJ(J - 1);
          setSitCount(sitCount + 1);
          break;
        default:
          return console.log("클릭됨");
      }
    },
    [E, N, F, J, sitCount]
  );

  const value = {
    state: { E, N, F, J, sitCount },
    actions: { increase, decrease },
  };
  return (
    <SituationContext.Provider value={value}>
      {children}
    </SituationContext.Provider>
  );
};

const { Consumer: SituationConsumer } = SituationContext;
export { SituationProvider, SituationConsumer };

export default SituationContext;
