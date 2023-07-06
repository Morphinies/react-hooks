import React, { useEffect, useRef, useState } from "react";

//счётчик
const RenderCount = () => {
  const renderCount = useRef(0);
  const [otherState, setOtherState] = useState(false);

  const toggleOtherState = () => {
    setOtherState(!otherState);
  };

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div className="mini-block">
      <h3>
        <b>render count</b>
      </h3>
      <p>renderCount: {renderCount.current}</p>
      <button onClick={toggleOtherState}>рендер</button>
    </div>
  );
};

export default RenderCount;
