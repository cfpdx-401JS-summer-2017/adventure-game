import React from 'react';
import challenges from './challenges';
import PropTypes from 'prop-types';

Challenge.propTypes = {
  challenge: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

Submit.propTypes = {
  onSubmit: PropTypes.func
};

export default function Challenge({ onChange, onSubmit }) {
  const challenge = challenges[0];
  return (
    <div>
      <div
        className="question"
        name="challengeQuestion"
        value="challengeQuestion">
        {challenge.question}
      </div>
      <div className="answer" name="challengeAnswer" value="challengeAnswer">
        You are {challenge.state}! The answer is {challenge.answer}
      </div>
      <div className="choices">
        <label>
          {challenge.answerA}
          <input
            type="radio"
            name="challengeAnswer"
            value="A"
            onChange={value => onChange(value)}
          />
        </label>
      </div>
      <div className="choices">
        <label>
          {challenge.answerB}
          <input
            type="radio"
            name="challengeAnswer"
            value="B"
            onChange={value => onChange(value)}
          />
        </label>
      </div>
      <div className="choices">
        <label>
          {challenge.answerC}
          <input
            type="radio"
            name="challengeAnswer"
            value="C"
            onChange={value => onChange(value)}
          />
        </label>
      </div>
      <div className="choices">
        <label>
          {challenge.answerD}
          <input
            type="radio"
            name="challengeAnswer"
            value="D"
            onChange={value => onChange(value)}
          />
        </label>
      </div>
      <Submit onSubmit={event => onChange(event)} />
    </div>
  );
}

export function Submit({ onSubmit }) {
  return (
    <div className="choices">
      <label>
        Submit
        <input
          type="button"
          value="submit"
          onClick={value => onSubmit(value)}
        />
      </label>
    </div>
  );
}
