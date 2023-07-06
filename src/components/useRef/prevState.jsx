import React, { useEffect, useRef, useState } from "react";

//способ хранения предыдущего состояния
const PrevState = () => {
  const prevState = useRef("");
  const [otherState, setOtherState] = useState("false");

  const toggleOtherState = () => {
    setOtherState((prevState) => (prevState === "false" ? "true" : "false"));
  };

  useEffect(() => {
    prevState.current = otherState;
  }, [otherState]);

  return (
    <div className="mini-block">
      <h3>
        <b>Prev State</b>
      </h3>
      <p>Prev State: {prevState.current}</p>
      <p>Cur State: {otherState}</p>
      <button onClick={toggleOtherState}>рендер</button>
    </div>
  );
};

export default PrevState;
