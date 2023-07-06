import React, { useRef } from "react";

//замена поиска элемент по id
const ProgrammableActions = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleClickWidth = () => {
    inputRef.current.style.width = "100px";
  };

  return (
    <div className="mini-block">
      <h3>
        <b>Programmable Actions</b>
      </h3>
      <label htmlFor="email">email</label>
      <input ref={inputRef} type="email" id="email" />
      <button onClick={handleClickWidth}>button change width</button>
      <button onClick={handleClick}>button focus</button>
    </div>
  );
};

export default ProgrammableActions;
