import React, { Component } from "react";
import Score from "./Score";
import Equation from "./Equation";
class NumberGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswers: 0,
      totalQuestions: 0
    };
  }

  handleCorrectAnswer = () => {
    this.setState(currentState => {
      return {
        correctAnswers: currentState.correctAnswers + 1,
        totalQuestions: currentState.totalQuestions + 1
      };
    });
  };

  handleIncorrectAnswer = () => {
    this.setState(currentState => {
      return {
        totalQuestions: currentState.totalQuestions + 1
      };
    });
  };

  render() {
    return (
      <div>
        <Score
          correctAnswers={this.state.correctAnswers}
          totalQuestions={this.state.totalQuestions}
        />
        <Equation
          onCorrectAnswer={this.handleCorrectAnswer}
          onIncorrectAnswer={this.handleIncorrectAnswer}
        />
      </div>
    );
  }
}

export default NumberGame;
