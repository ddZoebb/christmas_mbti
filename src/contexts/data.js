import { createContext, useState } from "react";

const DataContext = createContext({
  state: { name: "none" },
  actions: {
    setName: () => {},
  },
});

const DataProvider = ({ children }) => {
  const [name, setName] = useState("none");

  const value = {
    state: { name },
    actions: { setName },
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const { Consumer: DataConsumer } = DataContext;

export { DataProvider, DataConsumer };

export default DataContext;
