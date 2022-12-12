import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Name from "./pages/Name";
import Situation from "./pages/Situation";
import Result from "./pages/Result";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/name" element={<Name />}></Route>
      <Route path="/situation" element={<Situation />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
};

export default App;
