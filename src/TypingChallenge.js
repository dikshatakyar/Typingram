import React from 'react'
import TestLetter from './TestLetter'

const TypingChallenge = ({timeRemaining,timerStarted,testInfo,onInputChange}) => {
    console.log("Inside typing challenge :",testInfo);
    return (
            
            <div className="typing-chall">
                <div className="timer-cont">
                    <p className="timer">00:{timeRemaining >= 10 ? timeRemaining : 
                    `0${timeRemaining}`}
                    </p>
                    
                    <p className="timer-info">
                    {!timerStarted && "Start typing to start the test!" }
                    </p>
                </div>
                <div className="text-area-cont">
                    <div className="text-area-left">
                        <div className="text-area test-para">
                            {/* {selectedpara} */}
                        {testInfo.map((indletter,index)=>{
                            return (
                            <TestLetter 
                            key={index}
                            indletter=
                            {indletter} />
                            )
                        })}
                        </div>
                    </div>
                    <div className="text-area-right">
                            <textarea
                            onChange={(e)=>{
                                onInputChange(e.target.value)
                            }}
                            className='text-area' placeholder='Start typing here...'></textarea>

                            
                    </div>
                </div>
            </div>
       
    )
}

export default TypingChallenge
