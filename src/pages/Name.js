import React, { useCallback, useState } from "react";
import Button from "../common/Button";
import { DataConsumer } from "../contexts/data";

const Name = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
    if (e.target.value.includes(" ")) {
      setMsg("공백은 포함되지 않게 해주세요");
      setValidate(false);
    } else if (!(e.target.value.length >= 2 && e.target.value.length <= 5)) {
      setMsg("2글자 이상, 5글자 미만으로 해주세요");
      setValidate(false);
    } else {
      setMsg("");
      setValidate(true);
    }
  }, []);
  const [msg, setMsg] = useState("");
  const [validate, setValidate] = useState(false);

  return (
    <div className="Name-wrapper">
      <div className="Name-content-container">
        <DataConsumer>
          {({ actions }) => (
            <form className="Name-input-container">
              <input
                className="Name-input"
                placeholder="이름을 입력하세요"
                value={value}
                onChange={onChange}
              ></input>

              <div>{msg}</div>

              <Button
                to="/situation"
                onClick={() => {
                  actions.setName(value);
                }}
              >
                다음
              </Button>
            </form>
          )}
        </DataConsumer>
      </div>
    </div>
  );
};

export default Name;
