import React from 'react'

const TryAgain = ({words,characters,wpm,startAgain}) => {
    const diksha="https://github.com/dikshatakyar";
    return (
        <div>
            <div className="try-again-cont">
                <h1>Test Results</h1>

                <div className="result-cont">
                    <p>
                        <b>Characters : </b> {characters}
                    </p>
                    <p>
                        <b>words : </b> {words}
                    </p>
                    <p>
                        <b>Speed : </b> {wpm} wpm
                    </p>
                </div>
                
                <div>
                    <button onClick={()=> startAgain()}
                    className="common try-btn">Retry</button>

                    <button 
                    onClick={()=>{
                        // window.open("https://www.facebook.com/sharer/sharer.php?u=https://github.com/dikshatakyar&quote=Check+this+amazing+profile","width=800,height=600")
                        window.open("https://www.facebook.com/sharer/sharer.php?u=https://github.com/dikshatakyar&quote=Check+this+amazing+profile!!","width=800,height=600")
                    }}
                    className="common share-btn">Share</button>

                    <button
                        onClick={()=>{
                            window.open("https://twitter.com/intent/tweet?text=Check%20this%20amazing%20profile%20"+diksha,"Twitter","wdith=800,heght=600")
                        }}
                     className="common tweet-btn">Tweet</button>
                </div>
            </div>
        </div>
    )
}

export default TryAgain
