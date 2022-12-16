import React, { useCallback, useState } from "react";
import Button from "../common/Button";
import { DataConsumer } from "../contexts/data";

const Name = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
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

              <Button to="/situation" onClick={() => actions.setName(value)}>
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
