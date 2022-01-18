import React from 'react'
import ChallengeCards from './ChallengeCards'
import TypingChallenge from './TypingChallenge'

const TypingChallengeContainer = ({selectedpara,words,characters,wpm,timeRemaining,timerStarted,testInfo,onInputChange}) => {
    return (
        <div>
            <div className="typing-chall-cont">
            {  /*details section */ }
            <div className="details-container">
            {  /*words typed */ }
            <ChallengeCards cardname="Words" cardvalue={words}/>


               {/*character typed*/ }
            <ChallengeCards cardname="Characters" cardvalue={characters} />
            
            {  /*speed */ }
            <ChallengeCards cardname="Speed" cardvalue={wpm} />
               
               
              
            </div>
            {  /*real challenge */ }
                    <div className="typewriter-cont">
                        <TypingChallenge 
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        selectedpara={selectedpara} 
                        testInfo={testInfo}
                        onInputChange={onInputChange}
                        />
                    </div>

            </div>
        </div>
    )
}

export default TypingChallengeContainer
