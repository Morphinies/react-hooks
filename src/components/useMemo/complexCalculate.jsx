import React, { useEffect, useState } from "react";

//сохранение вычисление функции с заданными параметрами
const ComplexCalculate = () => {
  const [value, setValue] = useState(100);
  const [otherState, setOtherState] = useState();

  const buttonColor = otherState ? "blue" : "red";

  const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
  };

  const runFactorial = (n) => {
    console.log("run fuctorial");
    factorial(n);
  };

  useEffect(() => {
    console.log("render");
  });

  const fact = runFactorial(value);

  return (
    <div className="mini-block">
      <h3>
        <b>Complex Calculate</b>
      </h3>
      <p>value: {value}</p>
      <p>factorial: {fact}</p>
      <button onClick={() => setValue((prevState) => prevState - 1)}>-</button>
      <button onClick={() => setValue((prevState) => prevState + 1)}>+</button>
      <div>
        <p>зависимость от сторонних setState()</p>
        <button
          style={{ background: buttonColor }}
          onClick={() => setOtherState((prevState) => !prevState)}
        >
          changeColor
        </button>
      </div>
    </div>
  );
};

export default ComplexCalculate;
