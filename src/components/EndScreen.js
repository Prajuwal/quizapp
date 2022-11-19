import { useState } from 'react'
import '../App.css'
import { gameStateContext } from "../Helpers/Contexts";
import {useContext} from 'react'
import { Questions } from '../Helpers/Questions';

const EndScreen =() =>{
    const {score,setScore,setGameState,userName,setUserName} = useContext(gameStateContext)
 const restartQuiz = () =>{
    setScore(0)
    setGameState('menu')
 }
    return <div>
        <h1>QUIZ FINISHED</h1>
        <h3>{userName}</h3>
        <h1>{score}/{Questions.length}</h1>
        <button onClick={restartQuiz}>Restart Quiz</button>

    </div>
}
export default EndScreen