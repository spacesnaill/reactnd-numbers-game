import React from "react";

function Score(props) {
  return (
    <div>
      <p>
        {props.correctAnswers} / {props.totalQuestions}
      </p>
    </div>
  );
}

export default Score;
