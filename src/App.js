import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useScript } from "./common/KakaoHook";
import { useEffect } from "react";


import Home from "./pages/Home";
import Name from "./pages/Name";
import Situation from "./pages/Situation";
import Result from "./pages/Result";

import NotFound from "./pages/NotFound";
import Snow from "./common/Snow";
import KakaoShareButton from "./common/KakaoShareButton";
import { DataProvider } from "./contexts/data";
import { SituationProvider } from "./contexts/situation";

const App = () => {
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("84b3b7266483a7e081f592efa793cab5");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
        requestUrl: "http://localhost:3000/",
    });
};

  return (
    <div>
      <Snow />
      <DataProvider>
        <SituationProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/name" element={<Name />}></Route>
            <Route path="/situation" element={<Situation />}></Route>
            <Route path="/result" element={<Result />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </SituationProvider>
      </DataProvider>
    </div>
  );
};

export default App;
