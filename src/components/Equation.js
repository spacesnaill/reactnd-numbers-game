import React from "react";

function generateNumber(lowerLimit, upperLimit) {
  lowerLimit = Math.ceil(lowerLimit);
  upperLimit = Math.floor(upperLimit);
  return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
}

function Equation(props) {
  const upperLimit = 1000;
  const lowerLimit = 0;
  const firstOperand = generateNumber(lowerLimit, upperLimit);
  const secondOperand = generateNumber(lowerLimit, upperLimit);
  const thirdOperand = generateNumber(lowerLimit, upperLimit);
  const realSolution = firstOperand + secondOperand + thirdOperand;
  const proposedSolution = generateNumber(
    realSolution * 0.9,
    realSolution * 1.1
  );

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
