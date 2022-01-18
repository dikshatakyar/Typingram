import React from 'react';
import TryAgain from './TryAgain';
import TypingChallengeContainer from './TypingChallengeContainer';

const TestContainer = ({selectedpara,words,characters,wpm,timeRemaining,timerStarted,testInfo,onInputChange,startAgain}) => {
  
  
    return (
            <div className='test-container'>
            {
                timeRemaining>0 ?(
                    <div data-aos="fade-up" className="typing-chall-cont">
             <TypingChallengeContainer 
                timeRemaining={timeRemaining}
            selectedpara={selectedpara}
            timerStarted={timerStarted}
                 words={words} characters={characters} wpm={wpm}
                 testInfo={testInfo}
              onInputChange={onInputChange}
             />
            </div>
                ) : ( 
                      <div className="try-again-cont">
                    
                    <TryAgain words={words} characters={characters} wpm={wpm}
                    startAgain={startAgain}
                     />
                </div>
                )
            }
              
            </div>
    );
};




export default TestContainer;