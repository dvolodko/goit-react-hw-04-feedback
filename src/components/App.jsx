import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodFeedbackHandler = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onNeutralFeedbackHandler = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onBadFeedbackHandler = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    return (
      <div>
        <h1>Cafe Expresso</h1>
        <div>
          <h2>Please leave your feedback</h2>
          <button type="button" onClick={this.onGoodFeedbackHandler}>
            &#128578; Good
          </button>
          <button type="button" onClick={this.onNeutralFeedbackHandler}>
            &#128580; Neutral
          </button>
          <button type="button" onClick={this.onBadFeedbackHandler}>
            &#128577; Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}
