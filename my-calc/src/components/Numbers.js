import React from "react";

const Numbers = ({ handleClick }) => {
  const buttons = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "c",
    ".",
    "0",
    "=",
  ];
  return (
    <div>
      {buttons.map((button) => {
        return (
          <button onClick={handleClick} key={button}>
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default Numbers;
