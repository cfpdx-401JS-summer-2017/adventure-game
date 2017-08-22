import React from 'react';
// import challenges from './challenges';
import PropTypes from 'prop-types';

Challenge.PropTypes = {
  challenge: PropTypes.object
}


export default function Challenge(challenge) {
  return (
    <div>
      <div className="question" name="challengeQuestion" value="challengeQuestion">{challenge.question}</div>
      <div className="answer" name="challengeAnswer" value="challengeAnswer">{challenge.answer}</div>




    </div>

  );
}