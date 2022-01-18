import './App.css';
import React from 'react';
import Nav from './Nav';
import Landing from './Landing';
import Footer from './Footer';
import ChallengeSection from './ChallengeSection';
import { ReactComponent as Typing } from './assets/typing.svg';
import { SAMPLE_PARAGRAPHS } from './Data/samplepara';
// function App() {
//   return (
//     <div>
//   <Typing style={{width :"250px"}}/>
//         <h1>Hello</h1>
//     </div>
//   );
// }

const Totaltime=60;
const url="http://metaphorpsum.com/paragraphs/1/9"
const DefaultState={
  selectedpara:"",
  timerStarted:false,
  timeRemaining: Totaltime,
  words:0,
  characters:0,
  wpm:0,
  testInfo:[],
} 
class App extends React.Component{

    state=DefaultState;

    fetchnewparafallback=()=>{
      const data=SAMPLE_PARAGRAPHS[
        Math.floor(Math.random()*SAMPLE_PARAGRAPHS.length)
      ];
       
      const selectedparaArray=data.split("");
      // console.log("Splitted array : ",selectedparaArray);
      const testInfo=selectedparaArray.map((selectedLetter)=>{
        return{
          testLetter: selectedLetter,
          status: "unattempt",
        };
      });
    
      this.setState({...DefaultState,
        testInfo,selectedpara:data});


    }

    fetchNewPara=()=>{
      fetch(url)
      .then(response=>response.text())
      .then(data=>{
      // console.log(data)
      // this.setState({selectedpara:data})
      const selectedparaArray=data.split("");
      // console.log("Splitted array : ",selectedparaArray);
      const testInfo=selectedparaArray.map((selectedLetter)=>{
        return{
          testLetter: selectedLetter,
          status: "unattempt",
        };
      });
    
      this.setState({...DefaultState,
        testInfo,selectedpara:data});
    });
    }

    componentDidMount(){
      // this.fetchNewPara();
      this.fetchnewparafallback();
  }

    startTimer=()=>{
      this.setState({timerStarted:true});
      const timer=setInterval(()=>{
        if(this.state.timeRemaining>0){
          //changing the wpm
          const timeSpent=Totaltime-this.state.timeRemaining;
          const wpm=timeSpent>0?(this.state.words/timeSpent)*Totaltime : 0;
          this.setState({
            timeRemaining:this.state.timeRemaining - 1,
            wpm: parseInt(wpm),
          })
        }
        else{
          clearInterval(timer);
        }
      },1000)
    
    };


 startAgain=()=>{
  //  this.fetchNewPara()
  this.fetchnewparafallback();
   window.scrollTo(0, 0);
};

    handleUserInput=(inputValue)=>{
      // console.log(inputValue);
      if(!this.state.timerStarted) 
      this.startTimer();

      /* handling the underflow case:all the characters will be not attempted*/
      /* handling the overflow case:early exit*/
      /* handling backspace case: mark the [index+1] element has unattempted (irrespectiveof whether i<0) 
      but also check for overflow case here as [index+1] can go out of bound when index===length-1
      update the status in the testinfo by finding out the last character in he inputvalue and its index;
      check if the character at same index in testinfo(state) matches or not 
      if matches(yes)->correct
      if no match ->incorrect 
      Irrespective of the case, characters, words and speed can be updated
      */ 

      const characters=inputValue.length;
      const words=inputValue.split(" ").length;
      const index=characters-1;

      if(index<0){ 
        //set the first letter status as not attempted
        this.setState({
          testInfo:[
             {
               testLetter:this.state.testInfo[0].testLetter,
               status:"unattempt"
             },
             ...this.state.testInfo.slice(1)
            ],
            characters,
            words,
        });
        return;
      }
       if(index>this.state.selectedpara.length){
        this.setState ({
          characters,words
        })
        return;
       }

       //make a copy of testinfo
       const testInfo=this.state.testInfo;
       if(!(index===this.state.selectedpara.length-1))
       //no overflow
       testInfo[index+1].status="unattempt";
       //check for the correct typed letter
       const iscorrect=inputValue[index]===testInfo[index].testLetter;

       //updating the testinfo
       testInfo[index].status=iscorrect?"correct":"incorrect";

       //updating the state
       this.setState({
         testInfo,
         words,
         characters,
       })
  };


  render(){
      console.log("Test info : ",this.state.testInfo);
    return (
      <div className='app'>
      <Nav/>
      <Landing/>
      <ChallengeSection selectedpara={this.state.selectedpara} words={this.state.words} characters={this.state.characters} wpm={this.state.wpm}  timeRemaining={this.state.timeRemaining} timerStarted={this.state.timerStarted} testInfo={this.state.testInfo}
      onInputChange={this.handleUserInput}
      startAgain={this.startAgain}
       />
      <Footer/>
      </div>
    )
  }
}

export default App;
