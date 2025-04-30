import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [currentOperation, setCurrentOperation] = useState("");

  const handleButtonClick = (value) => {
    setCurrentOperation((prev) => prev + value);
  };

  const handleClear = () => {
    setCurrentOperation("");
  };

  const handleDelete = () => {
    setCurrentOperation((prev) => prev.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      // Se utiliza eval para simplificar el ejemplo; en entornos de producción es aconsejable usar una librería especializada.
      const result = eval(currentOperation);
      setCurrentOperation(result.toString());
    } catch (error) {
      setCurrentOperation("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{currentOperation || "0"}</div>
      <div className="buttons">
        <button className="btn operator" onClick={() => handleButtonClick("/")}>
          ÷
        </button>
        <button className="btn operator" onClick={() => handleButtonClick("*")}>
          ×
        </button>
        <button className="btn operator" onClick={() => handleButtonClick("-")}>
          −
        </button>
        <button className="btn operator" onClick={() => handleButtonClick("+")}>
          +
        </button>

        <button className="btn" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="btn" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="btn" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button className="btn" onClick={handleClear}>
          C
        </button>

        <button className="btn" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="btn" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="btn" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button className="btn" onClick={handleDelete}>
          ⌫
        </button>

        <button className="btn" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="btn" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="btn" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button className="btn" onClick={handleEquals}>
          =
        </button>

        <button className="btn zero" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button className="btn" onClick={() => handleButtonClick(".")}>
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
