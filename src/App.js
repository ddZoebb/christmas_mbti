import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Name from "./pages/Name";
import Situation from "./pages/Situation";
import Result from "./pages/Result";

import NotFound from "./pages/NotFound";
import Snow from "./common/Snow";
import { DataProvider } from "./contexts/data";

const App = () => {
  return (
    <div>
      <Snow />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/name" element={<Name />}></Route>
          <Route path="/situation" element={<Situation />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </DataProvider>
    </div>
  );
};

export default App;
