import React from "react";
import { ReactComponent as Typing } from './assets/typing.svg';
import Typewriter from 'typewriter-effect';
import emoji from 'react-easy-emoji';


const Landing = () =>{
    return (
        <div className="landing-container">
            <div data-aos="zoom-in-left"   className="landing-left">
                <h1 className="landing-header">Can you type</h1>
                <div className="typewriter-container">
                    {/* <h1>Accurately?👀</h1>
                    <h1>Quickly?🏃</h1>
                    <h1>Perfectly?🤠</h1> */}
                    <Typewriter
                        options={{
                            strings: ['Accurately?', 'Quickly?','Perfectly?'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                </div>
                
                </div>
                <div data-aos="zoom-in-right"  data-aos-duration="800" className="landing-right">
                            <Typing className='flash-image'/>
            </div>
        </div>
    );
};

export default Landing;