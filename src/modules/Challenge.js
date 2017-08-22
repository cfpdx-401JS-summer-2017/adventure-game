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
const challenge = challenges[0];

export default function Challenge({ onSubmit }) {
  return (
    <div className="visible">
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
          />
        </label>
      </div>
      <Submit value={challenge} onSubmit={value => onSubmit(value)}/>
    </div>
  );
}

export function Submit({ onSubmit }) {
  return (
    <div className="choices">
      <label>
        Submit
        <input
          name="submit"
          type="button"
          onClick={value => onSubmit(value)}
        />
      </label>
    </div>
  );
}
