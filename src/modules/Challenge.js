import React from 'react';
import challenges from './challenges';
import PropTypes from 'prop-types';

Challenge.PropTypes = {
  challenge: PropTypes.object,
  onChoice: PropTypes.func
}


export default function Challenge({onChoice}) {
  const challenge = challenges[0];
  return (
    <div>

    <div className="question" name="challengeQuestion" value="challengeQuestion">{challenge.question}</div>
    <div className="answer" name="challengeAnswer" value="challengeAnswer">You are {challenge.state}! The answer is {challenge.answer}</div>
    <div>
    <div className="choices">
    <label>{challenge.answerA}
    <input type="radio" value="A" onChange={value => onChoice(value)} />
    </label>
    </div>
    <div className="choices">
    <label>{challenge.answerB}
    <input type="radio" value="B" onChange={value => onChoice(value)}/>
    </label>
    </div>
    <div className="choices">
    <label>{challenge.answerC}
    <input type="radio" value="C" onChange={value => onChoice(value)}/>
    </label>
    </div>
    <div className="choices">
    <label>{challenge.answerD}
    <input type="radio" value="D" onChange={value => onChoice(value)}/>
    </label>
    </div>


    </div>

    </div>

  );
}