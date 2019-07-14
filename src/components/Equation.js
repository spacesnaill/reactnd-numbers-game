import React from "react";

function generateNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function Equation(props) {
  const upperLimit = 1000;
  const firstOperand = generateNumber(upperLimit);
  const secondOperand = generateNumber(upperLimit);
  const thirdOperand = generateNumber(upperLimit);
  const realSolution = firstOperand + secondOperand + thirdOperand;
  const proposedSolution =
    generateNumber(realSolution * 0.05) + Math.floor(realSolution * 0.95);

  return (
    <div>
      <p>
        {firstOperand} + {secondOperand} + {thirdOperand} = {proposedSolution}
      </p>
      <button
        onClick={
          realSolution === proposedSolution
            ? props.onCorrectAnswer
            : props.onIncorrectAnswer
        }
      >
        Correct
      </button>
      <button
        onClick={
          realSolution !== proposedSolution
            ? props.onCorrectAnswer
            : props.onIncorrectAnswer
        }
      >
        Incorrect
      </button>
    </div>
  );
}

export default Equation;
