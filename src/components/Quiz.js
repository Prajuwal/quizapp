import { useState } from 'react'
import '../App.css'
import {Questions} from '../Helpers/Questions'
import { gameStateContext } from "../Helpers/Contexts";
import {useContext} from 'react'


function Quiz() {
    const {score,setScore,setGameState} = useContext(gameStateContext)
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [optionChosen,setOptionChosen] = useState("")

const chooseoption =(option)=>{
    setOptionChosen(option)
}

const nextQuestion =()=>{
    if(Questions[currentQuestion].answer ===optionChosen)
    setScore(score+1)
   
    setCurrentQuestion(currentQuestion+1)
}
const finishQuiz =() =>{
    if(Questions[currentQuestion].answer ===optionChosen)
    setScore(score+1)
   
    setGameState('finished')
}

    return <div classNAME="QUIZ">
                    <h1>{Questions[currentQuestion].prompt}</h1>
                         <div>
                                 <button onClick={()=>{
                                     chooseoption('optionA')
                                        }}>{Questions[currentQuestion].optionA}
                                 </button>
                                 <button onClick={()=>{
                                     chooseoption('optionB')
                                        }}>{Questions[currentQuestion].optionB}
                                        </button>
                                        <button onClick={()=>{
                                     chooseoption('optionC')
                                        }}>{Questions[currentQuestion].optionC}
                                        </button>
                                 <button onClick={()=>{
                                     chooseoption('optionD')
                                          }}>{Questions[currentQuestion].optionD}
                                          </button>
                         </div>
                         {currentQuestion===Questions.length-1?
                         <button onClick={finishQuiz}>Finish Quiz</button>:
                         <button onClick={nextQuestion}>Next Question</button>
                         }
                         
             </div>
}

export default Quiz