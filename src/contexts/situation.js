import { createContext, useCallback, useState } from "react";

const SituationContext = createContext({
  state: { E: 0, N: 0, F: 0, P: 0, sitCount: 1 },
  actions: {
    count: () => {},
    setSitCount: () => {},
  },
});

const SituationProvider = ({ children }) => {
  const E = 0;
  const N = 0;
  const F = 0;
  const P = 0;
  const [sitCount, setSitCount] = useState(1);

  const count = useCallback((mbti) => {
    switch (mbti) {
      case "E":
        return {
          E: E + 1,
        };
      case "I":
        return {
          E: E - 1,
        };
      case "N":
        return {
          N: N + 1,
        };
      case "S":
        return {
          N: N - 1,
        };
      case "F":
        return {
          F: F + 1,
        };
      case "P":
        return {
          P: P + 1,
        };
      default:
        return 0;
    }
  }, []);

  const value = {
    state: { E, N, F, P, sitCount },
    actions: { count, setSitCount },
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
