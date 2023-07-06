import React from "react";
import RenderCount from "./components/useRef/renderCount";
import PrevState from "./components/useRef/prevState";
import ProgrammableActions from "./components/useRef/programmbleActions";
import ComplexCalculate from "./components/useMemo/complexCalculate";

const App = () => {
  return (
    <>
      <div className="block">
        <h2>use Ref </h2>
        <RenderCount />
        <PrevState />
        <ProgrammableActions />
      </div>
      <div className="block">
        <h2>use Memo </h2>
        <ComplexCalculate />
      </div>
    </>
  );
};

export default App;
