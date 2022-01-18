import React from 'react'

const TestLetter = ({indletter}) => {
    // const status=indletter.status;
    const {status}=indletter;


    const statusClass = {
        correct:"test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted:"test-letter-unattempt",
    }[status];
    

    // let statusClass;
    // if(status==='correct')
    // statusClass="test-letter-correct";
    // else if(status==='incorrect')
    // statusClass="test-letter-incorrect";
    // else
    // statusClass="test-letter-unattempt";

 



    return (
<span className={`test-letter ${statusClass}`}>
      {indletter.testLetter} 
      </span>  
    );
}

export default TestLetter
