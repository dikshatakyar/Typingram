import React from 'react';
import TestContainer from './TestContainer';

const ChallengeSection = ({selectedpara,words,characters,wpm,timeRemaining,timerStarted,testInfo,onInputChange,startAgain}) =>{
    return (
        <div className='challenge-sec-container'>
            <h1 data-aos="zoom-in-right"  data-aos-duration="800"
             className='challenge-sec-header'>
                Take a speed test now!
            </h1>
            <TestContainer
            timeRemaining={timeRemaining}
            selectedpara={selectedpara}
            words={words} characters={characters} wpm={wpm} timerStarted={timerStarted} 
            testInfo={testInfo} onInputChange={onInputChange }
            startAgain={startAgain}
            />
        </div>

    );
};

export default ChallengeSection;