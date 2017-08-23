import React from 'react';
import PropTypes from 'prop-types';

Challenge.propTypes = {
  challenge: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};


export default function Challenge({ challenge, onSubmit }) {
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
            onChange={target => onSubmit(target)}
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
            onChange={target => onSubmit(target)}
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
            onChange={target => onSubmit(target)}
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
            onChange={target => onSubmit(target)}
          />
        </label>
      </div>
      <div className="choices">
      <label>
        Submit
        <button
          name="submit"
          value={challenge.correctAnswer}
          onClick={target => onSubmit(target)}
        />
      </label>
    </div>
    </div>
  );
}
